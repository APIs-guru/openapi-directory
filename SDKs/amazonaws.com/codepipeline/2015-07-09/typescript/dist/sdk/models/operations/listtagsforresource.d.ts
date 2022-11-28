import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListTagsForResourceQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListTagsForResourceXAmzTargetEnum {
    CodePipeline20150709ListTagsForResource = "CodePipeline_20150709.ListTagsForResource"
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
    queryParams: ListTagsForResourceQueryParams;
    headers: ListTagsForResourceHeaders;
    request: shared.ListTagsForResourceInput;
}
export declare class ListTagsForResourceResponse extends SpeakeasyBase {
    contentType: string;
    invalidArnException?: any;
    invalidNextTokenException?: any;
    listTagsForResourceOutput?: shared.ListTagsForResourceOutput;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
