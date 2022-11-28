import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeletePermissionXAmzTargetEnum {
    AcmPrivateCaDeletePermission = "ACMPrivateCA.DeletePermission"
}
export declare class DeletePermissionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeletePermissionXAmzTargetEnum;
}
export declare class DeletePermissionRequest extends SpeakeasyBase {
    headers: DeletePermissionHeaders;
    request: shared.DeletePermissionRequest;
}
export declare class DeletePermissionResponse extends SpeakeasyBase {
    contentType: string;
    invalidArnException?: any;
    invalidStateException?: any;
    requestFailedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
