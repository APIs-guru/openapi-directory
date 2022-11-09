import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum PutPermissionXAmzTargetEnum {
    AwsEventsPutPermission = "AWSEvents.PutPermission"
}
export declare class PutPermissionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutPermissionXAmzTargetEnum;
}
export declare class PutPermissionRequest extends SpeakeasyBase {
    headers: PutPermissionHeaders;
    request: shared.PutPermissionRequest;
}
export declare class PutPermissionResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    internalException?: any;
    operationDisabledException?: any;
    policyLengthExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
