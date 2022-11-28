import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateItemXAmzTargetEnum {
    DynamoDb20111205UpdateItem = "DynamoDB_20111205.UpdateItem"
}
export declare class UpdateItemHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateItemXAmzTargetEnum;
}
export declare class UpdateItemRequest extends SpeakeasyBase {
    headers: UpdateItemHeaders;
    request: shared.UpdateItemInput;
}
export declare class UpdateItemResponse extends SpeakeasyBase {
    conditionalCheckFailedException?: any;
    contentType: string;
    internalServerError?: any;
    limitExceededException?: any;
    provisionedThroughputExceededException?: any;
    requestLimitExceeded?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updateItemOutput?: shared.UpdateItemOutput;
}
