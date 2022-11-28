import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SkipWaitTimeForInstanceTerminationXAmzTargetEnum {
    CodeDeploy20141006SkipWaitTimeForInstanceTermination = "CodeDeploy_20141006.SkipWaitTimeForInstanceTermination"
}
export declare class SkipWaitTimeForInstanceTerminationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SkipWaitTimeForInstanceTerminationXAmzTargetEnum;
}
export declare class SkipWaitTimeForInstanceTerminationRequest extends SpeakeasyBase {
    headers: SkipWaitTimeForInstanceTerminationHeaders;
    request: shared.SkipWaitTimeForInstanceTerminationInput;
}
export declare class SkipWaitTimeForInstanceTerminationResponse extends SpeakeasyBase {
    contentType: string;
    deploymentAlreadyCompletedException?: any;
    deploymentDoesNotExistException?: any;
    deploymentIdRequiredException?: any;
    deploymentNotStartedException?: any;
    invalidDeploymentIdException?: any;
    statusCode: number;
    unsupportedActionForDeploymentTypeException?: any;
}
