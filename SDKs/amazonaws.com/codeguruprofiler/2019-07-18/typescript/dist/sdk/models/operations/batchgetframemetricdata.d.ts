import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BatchGetFrameMetricDataPathParams extends SpeakeasyBase {
    profilingGroupName: string;
}
export declare enum BatchGetFrameMetricDataTargetResolutionEnum {
    Pt5M = "PT5M",
    Pt1H = "PT1H",
    P1D = "P1D"
}
export declare class BatchGetFrameMetricDataQueryParams extends SpeakeasyBase {
    endTime?: Date;
    period?: string;
    startTime?: Date;
    targetResolution?: BatchGetFrameMetricDataTargetResolutionEnum;
}
export declare class BatchGetFrameMetricDataHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchGetFrameMetricDataRequestBody extends SpeakeasyBase {
    frameMetrics?: shared.FrameMetric[];
}
export declare class BatchGetFrameMetricDataRequest extends SpeakeasyBase {
    pathParams: BatchGetFrameMetricDataPathParams;
    queryParams: BatchGetFrameMetricDataQueryParams;
    headers: BatchGetFrameMetricDataHeaders;
    request: BatchGetFrameMetricDataRequestBody;
}
export declare class BatchGetFrameMetricDataResponse extends SpeakeasyBase {
    batchGetFrameMetricDataResponse?: shared.BatchGetFrameMetricDataResponse;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
