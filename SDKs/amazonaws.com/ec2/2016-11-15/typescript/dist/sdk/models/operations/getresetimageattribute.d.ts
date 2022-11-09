import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetResetImageAttributeActionEnum {
    ResetImageAttribute = "ResetImageAttribute"
}
export declare enum GetResetImageAttributeAttributeEnum {
    LaunchPermission = "launchPermission"
}
export declare enum GetResetImageAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetResetImageAttributeQueryParams extends SpeakeasyBase {
    action: GetResetImageAttributeActionEnum;
    attribute: GetResetImageAttributeAttributeEnum;
    dryRun?: boolean;
    imageId: string;
    version: GetResetImageAttributeVersionEnum;
}
export declare class GetResetImageAttributeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetResetImageAttributeRequest extends SpeakeasyBase {
    queryParams: GetResetImageAttributeQueryParams;
    headers: GetResetImageAttributeHeaders;
}
export declare class GetResetImageAttributeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
