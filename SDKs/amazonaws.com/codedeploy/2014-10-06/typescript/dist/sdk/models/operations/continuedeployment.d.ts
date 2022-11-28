import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ContinueDeploymentXAmzTargetEnum {
    CodeDeploy20141006ContinueDeployment = "CodeDeploy_20141006.ContinueDeployment"
}
export declare class ContinueDeploymentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ContinueDeploymentXAmzTargetEnum;
}
export declare class ContinueDeploymentRequest extends SpeakeasyBase {
    headers: ContinueDeploymentHeaders;
    request: shared.ContinueDeploymentInput;
}
export declare class ContinueDeploymentResponse extends SpeakeasyBase {
    contentType: string;
    deploymentAlreadyCompletedException?: any;
    deploymentDoesNotExistException?: any;
    deploymentIdRequiredException?: any;
    deploymentIsNotInReadyStateException?: any;
    invalidDeploymentIdException?: any;
    invalidDeploymentStatusException?: any;
    invalidDeploymentWaitTypeException?: any;
    statusCode: number;
    unsupportedActionForDeploymentTypeException?: any;
}
