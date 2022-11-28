import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateImagePermissionsXAmzTargetEnum {
    PhotonAdminProxyServiceUpdateImagePermissions = "PhotonAdminProxyService.UpdateImagePermissions"
}
export declare class UpdateImagePermissionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateImagePermissionsXAmzTargetEnum;
}
export declare class UpdateImagePermissionsRequest extends SpeakeasyBase {
    headers: UpdateImagePermissionsHeaders;
    request: shared.UpdateImagePermissionsRequest;
}
export declare class UpdateImagePermissionsResponse extends SpeakeasyBase {
    contentType: string;
    limitExceededException?: any;
    resourceNotAvailableException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updateImagePermissionsResult?: Map<string, any>;
}
