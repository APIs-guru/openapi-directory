import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetItemXAmzTargetEnum {
    DynamoDb20120810GetItem = "DynamoDB_20120810.GetItem"
}
export declare class GetItemHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetItemXAmzTargetEnum;
}
export declare class GetItemRequest extends SpeakeasyBase {
    headers: GetItemHeaders;
    request: shared.GetItemInput;
}
export declare class GetItemResponse extends SpeakeasyBase {
    contentType: string;
    getItemOutput?: shared.GetItemOutput;
    internalServerError?: any;
    provisionedThroughputExceededException?: any;
    requestLimitExceeded?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
