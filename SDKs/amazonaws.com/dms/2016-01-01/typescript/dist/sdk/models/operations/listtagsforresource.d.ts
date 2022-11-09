import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ListTagsForResourceXAmzTargetEnum {
    AmazonDmSv20160101ListTagsForResource = "AmazonDMSv20160101.ListTagsForResource"
}
export declare class ListTagsForResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTagsForResourceXAmzTargetEnum;
}
export declare class ListTagsForResourceRequest extends SpeakeasyBase {
    headers: ListTagsForResourceHeaders;
    request: shared.ListTagsForResourceMessage;
}
export declare class ListTagsForResourceResponse extends SpeakeasyBase {
    contentType: string;
    listTagsForResourceResponse?: shared.ListTagsForResourceResponse;
    resourceNotFoundFault?: any;
    statusCode: number;
}
