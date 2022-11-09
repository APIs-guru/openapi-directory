import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteImagePermissionsXAmzTargetEnum {
    PhotonAdminProxyServiceDeleteImagePermissions = "PhotonAdminProxyService.DeleteImagePermissions"
}
export declare class DeleteImagePermissionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteImagePermissionsXAmzTargetEnum;
}
export declare class DeleteImagePermissionsRequest extends SpeakeasyBase {
    headers: DeleteImagePermissionsHeaders;
    request: shared.DeleteImagePermissionsRequest;
}
export declare class DeleteImagePermissionsResponse extends SpeakeasyBase {
    contentType: string;
    deleteImagePermissionsResult?: Map<string, any>;
    resourceNotAvailableException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
