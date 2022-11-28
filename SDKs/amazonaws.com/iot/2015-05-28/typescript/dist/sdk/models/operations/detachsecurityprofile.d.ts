import { SpeakeasyBase } from "../../../internal/utils";
export declare class DetachSecurityProfilePathParams extends SpeakeasyBase {
    securityProfileName: string;
}
export declare class DetachSecurityProfileQueryParams extends SpeakeasyBase {
    securityProfileTargetArn: string;
}
export declare class DetachSecurityProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DetachSecurityProfileRequest extends SpeakeasyBase {
    pathParams: DetachSecurityProfilePathParams;
    queryParams: DetachSecurityProfileQueryParams;
    headers: DetachSecurityProfileHeaders;
}
export declare class DetachSecurityProfileResponse extends SpeakeasyBase {
    contentType: string;
    detachSecurityProfileResponse?: Map<string, any>;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
