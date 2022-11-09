import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CompleteLayerUploadXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921CompleteLayerUpload = "AmazonEC2ContainerRegistry_V20150921.CompleteLayerUpload"
}
export declare class CompleteLayerUploadHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CompleteLayerUploadXAmzTargetEnum;
}
export declare class CompleteLayerUploadRequest extends SpeakeasyBase {
    headers: CompleteLayerUploadHeaders;
    request: shared.CompleteLayerUploadRequest;
}
export declare class CompleteLayerUploadResponse extends SpeakeasyBase {
    completeLayerUploadResponse?: shared.CompleteLayerUploadResponse;
    contentType: string;
    emptyUploadException?: any;
    invalidLayerException?: any;
    invalidParameterException?: any;
    kmsException?: any;
    layerAlreadyExistsException?: any;
    layerPartTooSmallException?: any;
    repositoryNotFoundException?: any;
    serverException?: any;
    statusCode: number;
    uploadNotFoundException?: any;
}
