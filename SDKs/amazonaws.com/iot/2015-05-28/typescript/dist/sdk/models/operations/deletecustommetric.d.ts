import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteCustomMetricPathParams extends SpeakeasyBase {
    metricName: string;
}
export declare class DeleteCustomMetricHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteCustomMetricRequest extends SpeakeasyBase {
    pathParams: DeleteCustomMetricPathParams;
    headers: DeleteCustomMetricHeaders;
}
export declare class DeleteCustomMetricResponse extends SpeakeasyBase {
    contentType: string;
    deleteCustomMetricResponse?: Map<string, any>;
    internalFailureException?: any;
    invalidRequestException?: any;
    statusCode: number;
    throttlingException?: any;
}
