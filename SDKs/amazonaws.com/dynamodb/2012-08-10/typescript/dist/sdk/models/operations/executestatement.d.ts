import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ExecuteStatementXAmzTargetEnum {
    DynamoDb20120810ExecuteStatement = "DynamoDB_20120810.ExecuteStatement"
}
export declare class ExecuteStatementHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ExecuteStatementXAmzTargetEnum;
}
export declare class ExecuteStatementRequest extends SpeakeasyBase {
    headers: ExecuteStatementHeaders;
    request: shared.ExecuteStatementInput;
}
export declare class ExecuteStatementResponse extends SpeakeasyBase {
    conditionalCheckFailedException?: any;
    contentType: string;
    duplicateItemException?: any;
    executeStatementOutput?: shared.ExecuteStatementOutput;
    internalServerError?: any;
    itemCollectionSizeLimitExceededException?: any;
    provisionedThroughputExceededException?: any;
    requestLimitExceeded?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    transactionConflictException?: any;
}
