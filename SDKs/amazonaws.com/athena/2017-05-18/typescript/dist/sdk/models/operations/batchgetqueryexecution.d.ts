import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum BatchGetQueryExecutionXAmzTargetEnum {
    AmazonAthenaBatchGetQueryExecution = "AmazonAthena.BatchGetQueryExecution"
}
export declare class BatchGetQueryExecutionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchGetQueryExecutionXAmzTargetEnum;
}
export declare class BatchGetQueryExecutionRequest extends SpeakeasyBase {
    headers: BatchGetQueryExecutionHeaders;
    request: shared.BatchGetQueryExecutionInput;
}
export declare class BatchGetQueryExecutionResponse extends SpeakeasyBase {
    batchGetQueryExecutionOutput?: shared.BatchGetQueryExecutionOutput;
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    statusCode: number;
}
