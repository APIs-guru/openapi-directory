import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateDirectoryConfigXAmzTargetEnum {
    PhotonAdminProxyServiceCreateDirectoryConfig = "PhotonAdminProxyService.CreateDirectoryConfig"
}
export declare class CreateDirectoryConfigHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateDirectoryConfigXAmzTargetEnum;
}
export declare class CreateDirectoryConfigRequest extends SpeakeasyBase {
    headers: CreateDirectoryConfigHeaders;
    request: shared.CreateDirectoryConfigRequest;
}
export declare class CreateDirectoryConfigResponse extends SpeakeasyBase {
    contentType: string;
    createDirectoryConfigResult?: shared.CreateDirectoryConfigResult;
    invalidAccountStatusException?: any;
    invalidRoleException?: any;
    limitExceededException?: any;
    operationNotPermittedException?: any;
    resourceAlreadyExistsException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
