import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreatePermissionXAmzTargetEnum {
    AcmPrivateCaCreatePermission = "ACMPrivateCA.CreatePermission"
}
export declare class CreatePermissionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreatePermissionXAmzTargetEnum;
}
export declare class CreatePermissionRequest extends SpeakeasyBase {
    headers: CreatePermissionHeaders;
    request: shared.CreatePermissionRequest;
}
export declare class CreatePermissionResponse extends SpeakeasyBase {
    contentType: string;
    invalidArnException?: any;
    invalidStateException?: any;
    limitExceededException?: any;
    permissionAlreadyExistsException?: any;
    requestFailedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
