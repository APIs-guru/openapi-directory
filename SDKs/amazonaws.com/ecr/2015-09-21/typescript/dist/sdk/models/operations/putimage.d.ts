import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutImageXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921PutImage = "AmazonEC2ContainerRegistry_V20150921.PutImage"
}
export declare class PutImageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutImageXAmzTargetEnum;
}
export declare class PutImageRequest extends SpeakeasyBase {
    headers: PutImageHeaders;
    request: shared.PutImageRequest;
}
export declare class PutImageResponse extends SpeakeasyBase {
    contentType: string;
    imageAlreadyExistsException?: any;
    imageDigestDoesNotMatchException?: any;
    imageTagAlreadyExistsException?: any;
    invalidParameterException?: any;
    kmsException?: any;
    layersNotFoundException?: any;
    limitExceededException?: any;
    putImageResponse?: shared.PutImageResponse;
    referencedImagesNotFoundException?: any;
    repositoryNotFoundException?: any;
    serverException?: any;
    statusCode: number;
}
