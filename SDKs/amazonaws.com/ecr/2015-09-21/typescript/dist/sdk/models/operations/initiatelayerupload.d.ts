import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum InitiateLayerUploadXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921InitiateLayerUpload = "AmazonEC2ContainerRegistry_V20150921.InitiateLayerUpload"
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
    kmsException?: any;
    repositoryNotFoundException?: any;
    serverException?: any;
    statusCode: number;
}
