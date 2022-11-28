import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDisableEbsEncryptionByDefaultActionEnum {
    DisableEbsEncryptionByDefault = "DisableEbsEncryptionByDefault"
}
export declare enum GetDisableEbsEncryptionByDefaultVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDisableEbsEncryptionByDefaultQueryParams extends SpeakeasyBase {
    action: GetDisableEbsEncryptionByDefaultActionEnum;
    dryRun?: boolean;
    version: GetDisableEbsEncryptionByDefaultVersionEnum;
}
export declare class GetDisableEbsEncryptionByDefaultHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDisableEbsEncryptionByDefaultRequest extends SpeakeasyBase {
    queryParams: GetDisableEbsEncryptionByDefaultQueryParams;
    headers: GetDisableEbsEncryptionByDefaultHeaders;
}
export declare class GetDisableEbsEncryptionByDefaultResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
