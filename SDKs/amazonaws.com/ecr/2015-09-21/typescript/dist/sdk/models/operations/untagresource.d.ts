import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UntagResourceXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921UntagResource = "AmazonEC2ContainerRegistry_V20150921.UntagResource"
}
export declare class UntagResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UntagResourceXAmzTargetEnum;
}
export declare class UntagResourceRequest extends SpeakeasyBase {
    headers: UntagResourceHeaders;
    request: shared.UntagResourceRequest;
}
export declare class UntagResourceResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterException?: any;
    invalidTagParameterException?: any;
    repositoryNotFoundException?: any;
    serverException?: any;
    statusCode: number;
    tooManyTagsException?: any;
    untagResourceResponse?: Map<string, any>;
}
