import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutItemXAmzTargetEnum {
    DynamoDb20111205PutItem = "DynamoDB_20111205.PutItem"
}
export declare class PutItemHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutItemXAmzTargetEnum;
}
export declare class PutItemRequest extends SpeakeasyBase {
    headers: PutItemHeaders;
    request: shared.PutItemInput;
}
export declare class PutItemResponse extends SpeakeasyBase {
    conditionalCheckFailedException?: any;
    contentType: string;
    internalServerError?: any;
    limitExceededException?: any;
    provisionedThroughputExceededException?: any;
    putItemOutput?: shared.PutItemOutput;
    requestLimitExceeded?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
