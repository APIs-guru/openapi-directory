import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CompleteLayerUploadXAmzTargetEnum {
    SpencerFrontendServiceCompleteLayerUpload = "SpencerFrontendService.CompleteLayerUpload"
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
    layerAlreadyExistsException?: any;
    layerPartTooSmallException?: any;
    registryNotFoundException?: any;
    repositoryNotFoundException?: any;
    serverException?: any;
    statusCode: number;
    unsupportedCommandException?: any;
    uploadNotFoundException?: any;
}
