import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLifecyclePolicyPreviewQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum GetLifecyclePolicyPreviewXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921GetLifecyclePolicyPreview = "AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicyPreview"
}
export declare class GetLifecyclePolicyPreviewHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetLifecyclePolicyPreviewXAmzTargetEnum;
}
export declare class GetLifecyclePolicyPreviewRequest extends SpeakeasyBase {
    queryParams: GetLifecyclePolicyPreviewQueryParams;
    headers: GetLifecyclePolicyPreviewHeaders;
    request: shared.GetLifecyclePolicyPreviewRequest;
}
export declare class GetLifecyclePolicyPreviewResponse extends SpeakeasyBase {
    contentType: string;
    getLifecyclePolicyPreviewResponse?: shared.GetLifecyclePolicyPreviewResponse;
    invalidParameterException?: any;
    lifecyclePolicyPreviewNotFoundException?: any;
    repositoryNotFoundException?: any;
    serverException?: any;
    statusCode: number;
}
