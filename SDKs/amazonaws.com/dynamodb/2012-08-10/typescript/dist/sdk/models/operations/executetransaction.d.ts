import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ExecuteTransactionXAmzTargetEnum {
    DynamoDb20120810ExecuteTransaction = "DynamoDB_20120810.ExecuteTransaction"
}
export declare class ExecuteTransactionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ExecuteTransactionXAmzTargetEnum;
}
export declare class ExecuteTransactionRequest extends SpeakeasyBase {
    headers: ExecuteTransactionHeaders;
    request: shared.ExecuteTransactionInput;
}
export declare class ExecuteTransactionResponse extends SpeakeasyBase {
    contentType: string;
    executeTransactionOutput?: shared.ExecuteTransactionOutput;
    idempotentParameterMismatchException?: any;
    internalServerError?: any;
    provisionedThroughputExceededException?: any;
    requestLimitExceeded?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    transactionCanceledException?: any;
    transactionInProgressException?: any;
}
