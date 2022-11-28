import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateDeploymentXAmzTargetEnum {
    CodeDeploy20141006CreateDeployment = "CodeDeploy_20141006.CreateDeployment"
}
export declare class CreateDeploymentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateDeploymentXAmzTargetEnum;
}
export declare class CreateDeploymentRequest extends SpeakeasyBase {
    headers: CreateDeploymentHeaders;
    request: shared.CreateDeploymentInput;
}
export declare class CreateDeploymentResponse extends SpeakeasyBase {
    applicationDoesNotExistException?: any;
    applicationNameRequiredException?: any;
    contentType: string;
    createDeploymentOutput?: shared.CreateDeploymentOutput;
    deploymentConfigDoesNotExistException?: any;
    deploymentGroupDoesNotExistException?: any;
    deploymentGroupNameRequiredException?: any;
    deploymentLimitExceededException?: any;
    descriptionTooLongException?: any;
    invalidApplicationNameException?: any;
    invalidAutoRollbackConfigException?: any;
    invalidAutoScalingGroupException?: any;
    invalidDeploymentConfigNameException?: any;
    invalidDeploymentGroupNameException?: any;
    invalidFileExistsBehaviorException?: any;
    invalidGitHubAccountTokenException?: any;
    invalidIgnoreApplicationStopFailuresValueException?: any;
    invalidLoadBalancerInfoException?: any;
    invalidRevisionException?: any;
    invalidRoleException?: any;
    invalidTargetInstancesException?: any;
    invalidTrafficRoutingConfigurationException?: any;
    invalidUpdateOutdatedInstancesOnlyValueException?: any;
    revisionDoesNotExistException?: any;
    revisionRequiredException?: any;
    statusCode: number;
    throttlingException?: any;
}
