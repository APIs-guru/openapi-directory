import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartNotebookExecutionXAmzTargetEnum {
    ElasticMapReduceStartNotebookExecution = "ElasticMapReduce.StartNotebookExecution"
}
export declare class StartNotebookExecutionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartNotebookExecutionXAmzTargetEnum;
}
export declare class StartNotebookExecutionRequest extends SpeakeasyBase {
    headers: StartNotebookExecutionHeaders;
    request: shared.StartNotebookExecutionInput;
}
export declare class StartNotebookExecutionResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    startNotebookExecutionOutput?: shared.StartNotebookExecutionOutput;
    statusCode: number;
}
