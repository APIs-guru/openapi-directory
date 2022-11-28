import { SpeakeasyBase } from "../../../internal/utils";
export declare class AttachSecurityProfilePathParams extends SpeakeasyBase {
    securityProfileName: string;
}
export declare class AttachSecurityProfileQueryParams extends SpeakeasyBase {
    securityProfileTargetArn: string;
}
export declare class AttachSecurityProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class AttachSecurityProfileRequest extends SpeakeasyBase {
    pathParams: AttachSecurityProfilePathParams;
    queryParams: AttachSecurityProfileQueryParams;
    headers: AttachSecurityProfileHeaders;
}
export declare class AttachSecurityProfileResponse extends SpeakeasyBase {
    attachSecurityProfileResponse?: Map<string, any>;
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    versionConflictException?: any;
}
