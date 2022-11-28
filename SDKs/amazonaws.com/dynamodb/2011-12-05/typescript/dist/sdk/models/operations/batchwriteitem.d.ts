import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum BatchWriteItemXAmzTargetEnum {
    DynamoDb20111205BatchWriteItem = "DynamoDB_20111205.BatchWriteItem"
}
export declare class BatchWriteItemHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchWriteItemXAmzTargetEnum;
}
export declare class BatchWriteItemRequest extends SpeakeasyBase {
    headers: BatchWriteItemHeaders;
    request: shared.BatchWriteItemInput;
}
export declare class BatchWriteItemResponse extends SpeakeasyBase {
    batchWriteItemOutput?: shared.BatchWriteItemOutput;
    contentType: string;
    internalServerError?: any;
    limitExceededException?: any;
    provisionedThroughputExceededException?: any;
    requestLimitExceeded?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
