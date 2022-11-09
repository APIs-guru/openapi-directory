import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetResetFpgaImageAttributeActionEnum {
    ResetFpgaImageAttribute = "ResetFpgaImageAttribute"
}
export declare enum GetResetFpgaImageAttributeAttributeEnum {
    LoadPermission = "loadPermission"
}
export declare enum GetResetFpgaImageAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetResetFpgaImageAttributeQueryParams extends SpeakeasyBase {
    action: GetResetFpgaImageAttributeActionEnum;
    attribute?: GetResetFpgaImageAttributeAttributeEnum;
    dryRun?: boolean;
    fpgaImageId: string;
    version: GetResetFpgaImageAttributeVersionEnum;
}
export declare class GetResetFpgaImageAttributeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetResetFpgaImageAttributeRequest extends SpeakeasyBase {
    queryParams: GetResetFpgaImageAttributeQueryParams;
    headers: GetResetFpgaImageAttributeHeaders;
}
export declare class GetResetFpgaImageAttributeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
