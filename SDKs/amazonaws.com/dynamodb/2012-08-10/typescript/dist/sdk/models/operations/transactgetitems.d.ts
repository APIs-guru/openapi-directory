import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum TransactGetItemsXAmzTargetEnum {
    DynamoDb20120810TransactGetItems = "DynamoDB_20120810.TransactGetItems"
}
export declare class TransactGetItemsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: TransactGetItemsXAmzTargetEnum;
}
export declare class TransactGetItemsRequest extends SpeakeasyBase {
    headers: TransactGetItemsHeaders;
    request: shared.TransactGetItemsInput;
}
export declare class TransactGetItemsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    provisionedThroughputExceededException?: any;
    requestLimitExceeded?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    transactGetItemsOutput?: shared.TransactGetItemsOutput;
    transactionCanceledException?: any;
}
