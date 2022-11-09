import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum RemovePermissionXAmzTargetEnum {
    AwsEventsRemovePermission = "AWSEvents.RemovePermission"
}
export declare class RemovePermissionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RemovePermissionXAmzTargetEnum;
}
export declare class RemovePermissionRequest extends SpeakeasyBase {
    headers: RemovePermissionHeaders;
    request: shared.RemovePermissionRequest;
}
export declare class RemovePermissionResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    internalException?: any;
    operationDisabledException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
