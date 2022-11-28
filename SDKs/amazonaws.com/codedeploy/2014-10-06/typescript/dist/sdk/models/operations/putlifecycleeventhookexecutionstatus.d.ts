import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutLifecycleEventHookExecutionStatusXAmzTargetEnum {
    CodeDeploy20141006PutLifecycleEventHookExecutionStatus = "CodeDeploy_20141006.PutLifecycleEventHookExecutionStatus"
}
export declare class PutLifecycleEventHookExecutionStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutLifecycleEventHookExecutionStatusXAmzTargetEnum;
}
export declare class PutLifecycleEventHookExecutionStatusRequest extends SpeakeasyBase {
    headers: PutLifecycleEventHookExecutionStatusHeaders;
    request: shared.PutLifecycleEventHookExecutionStatusInput;
}
export declare class PutLifecycleEventHookExecutionStatusResponse extends SpeakeasyBase {
    contentType: string;
    deploymentDoesNotExistException?: any;
    deploymentIdRequiredException?: any;
    invalidDeploymentIdException?: any;
    invalidLifecycleEventHookExecutionIdException?: any;
    invalidLifecycleEventHookExecutionStatusException?: any;
    lifecycleEventAlreadyCompletedException?: any;
    putLifecycleEventHookExecutionStatusOutput?: shared.PutLifecycleEventHookExecutionStatusOutput;
    statusCode: number;
    unsupportedActionForDeploymentTypeException?: any;
}
