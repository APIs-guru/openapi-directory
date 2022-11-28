import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StopDeploymentXAmzTargetEnum {
    CodeDeploy20141006StopDeployment = "CodeDeploy_20141006.StopDeployment"
}
export declare class StopDeploymentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopDeploymentXAmzTargetEnum;
}
export declare class StopDeploymentRequest extends SpeakeasyBase {
    headers: StopDeploymentHeaders;
    request: shared.StopDeploymentInput;
}
export declare class StopDeploymentResponse extends SpeakeasyBase {
    contentType: string;
    deploymentAlreadyCompletedException?: any;
    deploymentDoesNotExistException?: any;
    deploymentGroupDoesNotExistException?: any;
    deploymentIdRequiredException?: any;
    invalidDeploymentIdException?: any;
    statusCode: number;
    stopDeploymentOutput?: shared.StopDeploymentOutput;
    unsupportedActionForDeploymentTypeException?: any;
}
