import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum BatchExecuteStatementXAmzTargetEnum {
    DynamoDb20120810BatchExecuteStatement = "DynamoDB_20120810.BatchExecuteStatement"
}
export declare class BatchExecuteStatementHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchExecuteStatementXAmzTargetEnum;
}
export declare class BatchExecuteStatementRequest extends SpeakeasyBase {
    headers: BatchExecuteStatementHeaders;
    request: shared.BatchExecuteStatementInput;
}
export declare class BatchExecuteStatementResponse extends SpeakeasyBase {
    batchExecuteStatementOutput?: shared.BatchExecuteStatementOutput;
    contentType: string;
    internalServerError?: any;
    requestLimitExceeded?: any;
    statusCode: number;
}
