import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum TransactWriteItemsXAmzTargetEnum {
    DynamoDb20120810TransactWriteItems = "DynamoDB_20120810.TransactWriteItems"
}
export declare class TransactWriteItemsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: TransactWriteItemsXAmzTargetEnum;
}
export declare class TransactWriteItemsRequest extends SpeakeasyBase {
    headers: TransactWriteItemsHeaders;
    request: shared.TransactWriteItemsInput;
}
export declare class TransactWriteItemsResponse extends SpeakeasyBase {
    contentType: string;
    idempotentParameterMismatchException?: any;
    internalServerError?: any;
    provisionedThroughputExceededException?: any;
    requestLimitExceeded?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    transactWriteItemsOutput?: shared.TransactWriteItemsOutput;
    transactionCanceledException?: any;
    transactionInProgressException?: any;
}
