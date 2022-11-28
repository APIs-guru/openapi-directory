import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum TagResourceXAmzTargetEnum {
    CodePipeline20150709TagResource = "CodePipeline_20150709.TagResource"
}
export declare class TagResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: TagResourceXAmzTargetEnum;
}
export declare class TagResourceRequest extends SpeakeasyBase {
    headers: TagResourceHeaders;
    request: shared.TagResourceInput;
}
export declare class TagResourceResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    invalidArnException?: any;
    invalidTagsException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tagResourceOutput?: Map<string, any>;
    tooManyTagsException?: any;
    validationException?: any;
}
