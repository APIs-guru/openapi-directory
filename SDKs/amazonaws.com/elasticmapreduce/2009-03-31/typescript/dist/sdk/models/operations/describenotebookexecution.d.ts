import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeNotebookExecutionXAmzTargetEnum {
    ElasticMapReduceDescribeNotebookExecution = "ElasticMapReduce.DescribeNotebookExecution"
}
export declare class DescribeNotebookExecutionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeNotebookExecutionXAmzTargetEnum;
}
export declare class DescribeNotebookExecutionRequest extends SpeakeasyBase {
    headers: DescribeNotebookExecutionHeaders;
    request: shared.DescribeNotebookExecutionInput;
}
export declare class DescribeNotebookExecutionResponse extends SpeakeasyBase {
    contentType: string;
    describeNotebookExecutionOutput?: shared.DescribeNotebookExecutionOutput;
    internalServerError?: any;
    invalidRequestException?: any;
    statusCode: number;
}
