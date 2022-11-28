import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BatchGetItemQueryParams extends SpeakeasyBase {
    requestItems?: string;
}
export declare enum BatchGetItemXAmzTargetEnum {
    DynamoDb20111205BatchGetItem = "DynamoDB_20111205.BatchGetItem"
}
export declare class BatchGetItemHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchGetItemXAmzTargetEnum;
}
export declare class BatchGetItemRequest extends SpeakeasyBase {
    queryParams: BatchGetItemQueryParams;
    headers: BatchGetItemHeaders;
    request: shared.BatchGetItemInput;
}
export declare class BatchGetItemResponse extends SpeakeasyBase {
    batchGetItemOutput?: shared.BatchGetItemOutput;
    contentType: string;
    internalServerError?: any;
    provisionedThroughputExceededException?: any;
    requestLimitExceeded?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
