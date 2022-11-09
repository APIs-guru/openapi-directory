import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UploadLayerPartXAmzTargetEnum {
    SpencerFrontendServiceUploadLayerPart = "SpencerFrontendService.UploadLayerPart"
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
    limitExceededException?: any;
    registryNotFoundException?: any;
    repositoryNotFoundException?: any;
    serverException?: any;
    statusCode: number;
    unsupportedCommandException?: any;
    uploadLayerPartResponse?: shared.UploadLayerPartResponse;
    uploadNotFoundException?: any;
}
