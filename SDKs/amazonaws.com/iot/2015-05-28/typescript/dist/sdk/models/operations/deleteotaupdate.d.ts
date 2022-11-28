import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteOtaUpdatePathParams extends SpeakeasyBase {
    otaUpdateId: string;
}
export declare class DeleteOtaUpdateQueryParams extends SpeakeasyBase {
    deleteStream?: boolean;
    forceDeleteAwsJob?: boolean;
}
export declare class DeleteOtaUpdateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteOtaUpdateRequest extends SpeakeasyBase {
    pathParams: DeleteOtaUpdatePathParams;
    queryParams: DeleteOtaUpdateQueryParams;
    headers: DeleteOtaUpdateHeaders;
}
export declare class DeleteOtaUpdateResponse extends SpeakeasyBase {
    contentType: string;
    deleteOtaUpdateResponse?: Map<string, any>;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
    versionConflictException?: any;
}
