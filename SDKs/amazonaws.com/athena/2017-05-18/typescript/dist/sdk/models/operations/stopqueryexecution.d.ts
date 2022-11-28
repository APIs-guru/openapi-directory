import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StopQueryExecutionXAmzTargetEnum {
    AmazonAthenaStopQueryExecution = "AmazonAthena.StopQueryExecution"
}
export declare class StopQueryExecutionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopQueryExecutionXAmzTargetEnum;
}
export declare class StopQueryExecutionRequest extends SpeakeasyBase {
    headers: StopQueryExecutionHeaders;
    request: shared.StopQueryExecutionInput;
}
export declare class StopQueryExecutionResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    statusCode: number;
    stopQueryExecutionOutput?: Map<string, any>;
}
