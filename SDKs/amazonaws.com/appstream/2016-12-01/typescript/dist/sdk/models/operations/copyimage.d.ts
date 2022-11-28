import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CopyImageXAmzTargetEnum {
    PhotonAdminProxyServiceCopyImage = "PhotonAdminProxyService.CopyImage"
}
export declare class CopyImageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CopyImageXAmzTargetEnum;
}
export declare class CopyImageRequest extends SpeakeasyBase {
    headers: CopyImageHeaders;
    request: shared.CopyImageRequest;
}
export declare class CopyImageResponse extends SpeakeasyBase {
    contentType: string;
    copyImageResponse?: shared.CopyImageResponse;
    incompatibleImageException?: any;
    invalidAccountStatusException?: any;
    limitExceededException?: any;
    resourceAlreadyExistsException?: any;
    resourceNotAvailableException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
