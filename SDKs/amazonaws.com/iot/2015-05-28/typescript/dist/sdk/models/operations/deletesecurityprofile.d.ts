import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteSecurityProfilePathParams extends SpeakeasyBase {
    securityProfileName: string;
}
export declare class DeleteSecurityProfileQueryParams extends SpeakeasyBase {
    expectedVersion?: number;
}
export declare class DeleteSecurityProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteSecurityProfileRequest extends SpeakeasyBase {
    pathParams: DeleteSecurityProfilePathParams;
    queryParams: DeleteSecurityProfileQueryParams;
    headers: DeleteSecurityProfileHeaders;
}
export declare class DeleteSecurityProfileResponse extends SpeakeasyBase {
    contentType: string;
    deleteSecurityProfileResponse?: Map<string, any>;
    internalFailureException?: any;
    invalidRequestException?: any;
    statusCode: number;
    throttlingException?: any;
    versionConflictException?: any;
}
