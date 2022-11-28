import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UploadLayerPartXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921UploadLayerPart = "AmazonEC2ContainerRegistry_V20150921.UploadLayerPart"
}
export declare class UploadLayerPartHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UploadLayerPartXAmzTargetEnum;
}
export declare class UploadLayerPartRequest extends SpeakeasyBase {
    headers: UploadLayerPartHeaders;
    request: shared.UploadLayerPartRequest;
}
export declare class UploadLayerPartResponse extends SpeakeasyBase {
    contentType: string;
    invalidLayerPartException?: any;
    invalidParameterException?: any;
    kmsException?: any;
    limitExceededException?: any;
    repositoryNotFoundException?: any;
    serverException?: any;
    statusCode: number;
    uploadLayerPartResponse?: shared.UploadLayerPartResponse;
    uploadNotFoundException?: any;
}
