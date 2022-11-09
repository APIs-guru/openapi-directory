import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteDirectoryConfigXAmzTargetEnum {
    PhotonAdminProxyServiceDeleteDirectoryConfig = "PhotonAdminProxyService.DeleteDirectoryConfig"
}
export declare class DeleteDirectoryConfigHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteDirectoryConfigXAmzTargetEnum;
}
export declare class DeleteDirectoryConfigRequest extends SpeakeasyBase {
    headers: DeleteDirectoryConfigHeaders;
    request: shared.DeleteDirectoryConfigRequest;
}
export declare class DeleteDirectoryConfigResponse extends SpeakeasyBase {
    contentType: string;
    deleteDirectoryConfigResult?: Map<string, any>;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
