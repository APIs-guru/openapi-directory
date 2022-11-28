import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum InitiateLayerUploadXAmzTargetEnum {
    SpencerFrontendServiceInitiateLayerUpload = "SpencerFrontendService.InitiateLayerUpload"
}
export declare class InitiateLayerUploadHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: InitiateLayerUploadXAmzTargetEnum;
}
export declare class InitiateLayerUploadRequest extends SpeakeasyBase {
    headers: InitiateLayerUploadHeaders;
    request: shared.InitiateLayerUploadRequest;
}
export declare class InitiateLayerUploadResponse extends SpeakeasyBase {
    contentType: string;
    initiateLayerUploadResponse?: shared.InitiateLayerUploadResponse;
    invalidParameterException?: any;
    registryNotFoundException?: any;
    repositoryNotFoundException?: any;
    serverException?: any;
    statusCode: number;
    unsupportedCommandException?: any;
}
