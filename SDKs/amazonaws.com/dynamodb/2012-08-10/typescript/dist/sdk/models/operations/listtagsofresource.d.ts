import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListTagsOfResourceXAmzTargetEnum {
    DynamoDb20120810ListTagsOfResource = "DynamoDB_20120810.ListTagsOfResource"
}
export declare class ListTagsOfResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTagsOfResourceXAmzTargetEnum;
}
export declare class ListTagsOfResourceRequest extends SpeakeasyBase {
    headers: ListTagsOfResourceHeaders;
    request: shared.ListTagsOfResourceInput;
}
export declare class ListTagsOfResourceResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    listTagsOfResourceOutput?: shared.ListTagsOfResourceOutput;
    resourceNotFoundException?: any;
    statusCode: number;
}
