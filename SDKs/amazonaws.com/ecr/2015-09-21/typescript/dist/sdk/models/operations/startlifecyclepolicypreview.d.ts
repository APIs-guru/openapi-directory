import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum StartLifecyclePolicyPreviewXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921StartLifecyclePolicyPreview = "AmazonEC2ContainerRegistry_V20150921.StartLifecyclePolicyPreview"
}
export declare class StartLifecyclePolicyPreviewHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartLifecyclePolicyPreviewXAmzTargetEnum;
}
export declare class StartLifecyclePolicyPreviewRequest extends SpeakeasyBase {
    headers: StartLifecyclePolicyPreviewHeaders;
    request: shared.StartLifecyclePolicyPreviewRequest;
}
export declare class StartLifecyclePolicyPreviewResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterException?: any;
    lifecyclePolicyNotFoundException?: any;
    lifecyclePolicyPreviewInProgressException?: any;
    repositoryNotFoundException?: any;
    serverException?: any;
    startLifecyclePolicyPreviewResponse?: shared.StartLifecyclePolicyPreviewResponse;
    statusCode: number;
}
