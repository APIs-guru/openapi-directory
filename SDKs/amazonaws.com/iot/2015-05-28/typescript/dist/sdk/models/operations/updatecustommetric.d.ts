import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateCustomMetricPathParams extends SpeakeasyBase {
    metricName: string;
}
export declare class UpdateCustomMetricHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateCustomMetricRequestBody extends SpeakeasyBase {
    displayName: string;
}
export declare class UpdateCustomMetricRequest extends SpeakeasyBase {
    pathParams: UpdateCustomMetricPathParams;
    headers: UpdateCustomMetricHeaders;
    request: UpdateCustomMetricRequestBody;
}
export declare class UpdateCustomMetricResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateCustomMetricResponse?: shared.UpdateCustomMetricResponse;
}
