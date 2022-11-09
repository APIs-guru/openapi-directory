import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateUpdatedImageXAmzTargetEnum {
    PhotonAdminProxyServiceCreateUpdatedImage = "PhotonAdminProxyService.CreateUpdatedImage"
}
export declare class CreateUpdatedImageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateUpdatedImageXAmzTargetEnum;
}
export declare class CreateUpdatedImageRequest extends SpeakeasyBase {
    headers: CreateUpdatedImageHeaders;
    request: shared.CreateUpdatedImageRequest;
}
export declare class CreateUpdatedImageResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    createUpdatedImageResult?: shared.CreateUpdatedImageResult;
    incompatibleImageException?: any;
    invalidAccountStatusException?: any;
    limitExceededException?: any;
    operationNotPermittedException?: any;
    resourceAlreadyExistsException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
