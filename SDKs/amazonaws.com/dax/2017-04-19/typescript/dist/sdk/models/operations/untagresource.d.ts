import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UntagResourceXAmzTargetEnum {
    AmazonDaxv3UntagResource = "AmazonDAXV3.UntagResource"
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
    clusterNotFoundFault?: any;
    contentType: string;
    invalidArnFault?: any;
    invalidClusterStateFault?: any;
    invalidParameterCombinationException?: any;
    invalidParameterValueException?: any;
    serviceLinkedRoleNotFoundFault?: any;
    statusCode: number;
    tagNotFoundFault?: any;
    untagResourceResponse?: shared.UntagResourceResponse;
}
