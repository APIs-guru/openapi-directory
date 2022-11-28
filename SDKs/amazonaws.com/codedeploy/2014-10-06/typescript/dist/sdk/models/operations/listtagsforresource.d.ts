import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListTagsForResourceXAmzTargetEnum {
    CodeDeploy20141006ListTagsForResource = "CodeDeploy_20141006.ListTagsForResource"
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
    request: shared.ListTagsForResourceInput;
}
export declare class ListTagsForResourceResponse extends SpeakeasyBase {
    arnNotSupportedException?: any;
    contentType: string;
    invalidArnException?: any;
    listTagsForResourceOutput?: shared.ListTagsForResourceOutput;
    resourceArnRequiredException?: any;
    statusCode: number;
}
