import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum StartImageBuilderXAmzTargetEnum {
    PhotonAdminProxyServiceStartImageBuilder = "PhotonAdminProxyService.StartImageBuilder"
}
export declare class StartImageBuilderHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartImageBuilderXAmzTargetEnum;
}
export declare class StartImageBuilderRequest extends SpeakeasyBase {
    headers: StartImageBuilderHeaders;
    request: shared.StartImageBuilderRequest;
}
export declare class StartImageBuilderResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    incompatibleImageException?: any;
    invalidAccountStatusException?: any;
    resourceNotAvailableException?: any;
    resourceNotFoundException?: any;
    startImageBuilderResult?: shared.StartImageBuilderResult;
    statusCode: number;
}
