import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteItemXAmzTargetEnum {
    DynamoDb20111205DeleteItem = "DynamoDB_20111205.DeleteItem"
}
export declare class DeleteItemHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteItemXAmzTargetEnum;
}
export declare class DeleteItemRequest extends SpeakeasyBase {
    headers: DeleteItemHeaders;
    request: shared.DeleteItemInput;
}
export declare class DeleteItemResponse extends SpeakeasyBase {
    conditionalCheckFailedException?: any;
    contentType: string;
    deleteItemOutput?: shared.DeleteItemOutput;
    internalServerError?: any;
    limitExceededException?: any;
    provisionedThroughputExceededException?: any;
    requestLimitExceeded?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
