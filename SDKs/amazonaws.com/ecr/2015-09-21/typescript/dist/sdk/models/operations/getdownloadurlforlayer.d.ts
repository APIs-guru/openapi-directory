import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetDownloadUrlForLayerXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921GetDownloadUrlForLayer = "AmazonEC2ContainerRegistry_V20150921.GetDownloadUrlForLayer"
}
export declare class GetDownloadUrlForLayerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDownloadUrlForLayerXAmzTargetEnum;
}
export declare class GetDownloadUrlForLayerRequest extends SpeakeasyBase {
    headers: GetDownloadUrlForLayerHeaders;
    request: shared.GetDownloadUrlForLayerRequest;
}
export declare class GetDownloadUrlForLayerResponse extends SpeakeasyBase {
    contentType: string;
    getDownloadUrlForLayerResponse?: shared.GetDownloadUrlForLayerResponse;
    invalidParameterException?: any;
    layerInaccessibleException?: any;
    layersNotFoundException?: any;
    repositoryNotFoundException?: any;
    serverException?: any;
    statusCode: number;
}
