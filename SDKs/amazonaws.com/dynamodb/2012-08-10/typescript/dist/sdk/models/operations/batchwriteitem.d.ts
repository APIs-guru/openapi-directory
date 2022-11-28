import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum BatchWriteItemXAmzTargetEnum {
    DynamoDb20120810BatchWriteItem = "DynamoDB_20120810.BatchWriteItem"
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
    itemCollectionSizeLimitExceededException?: any;
    provisionedThroughputExceededException?: any;
    requestLimitExceeded?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
