import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteFleetMetricPathParams extends SpeakeasyBase {
    metricName: string;
}
export declare class DeleteFleetMetricQueryParams extends SpeakeasyBase {
    expectedVersion?: number;
}
export declare class DeleteFleetMetricHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteFleetMetricRequest extends SpeakeasyBase {
    pathParams: DeleteFleetMetricPathParams;
    queryParams: DeleteFleetMetricQueryParams;
    headers: DeleteFleetMetricHeaders;
}
export declare class DeleteFleetMetricResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
    versionConflictException?: any;
}
