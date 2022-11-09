import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum TagResourceXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921TagResource = "AmazonEC2ContainerRegistry_V20150921.TagResource"
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
    request: shared.TagResourceRequest;
}
export declare class TagResourceResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterException?: any;
    invalidTagParameterException?: any;
    repositoryNotFoundException?: any;
    serverException?: any;
    statusCode: number;
    tagResourceResponse?: Map<string, any>;
    tooManyTagsException?: any;
}
