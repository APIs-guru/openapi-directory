import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StopNotebookExecutionXAmzTargetEnum {
    ElasticMapReduceStopNotebookExecution = "ElasticMapReduce.StopNotebookExecution"
}
export declare class StopNotebookExecutionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopNotebookExecutionXAmzTargetEnum;
}
export declare class StopNotebookExecutionRequest extends SpeakeasyBase {
    headers: StopNotebookExecutionHeaders;
    request: shared.StopNotebookExecutionInput;
}
export declare class StopNotebookExecutionResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    invalidRequestException?: any;
    statusCode: number;
}
