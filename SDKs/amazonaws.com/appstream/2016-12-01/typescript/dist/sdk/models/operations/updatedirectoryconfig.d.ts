import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UpdateDirectoryConfigXAmzTargetEnum {
    PhotonAdminProxyServiceUpdateDirectoryConfig = "PhotonAdminProxyService.UpdateDirectoryConfig"
}
export declare class UpdateDirectoryConfigHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateDirectoryConfigXAmzTargetEnum;
}
export declare class UpdateDirectoryConfigRequest extends SpeakeasyBase {
    headers: UpdateDirectoryConfigHeaders;
    request: shared.UpdateDirectoryConfigRequest;
}
export declare class UpdateDirectoryConfigResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    invalidRoleException?: any;
    operationNotPermittedException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updateDirectoryConfigResult?: shared.UpdateDirectoryConfigResult;
}
