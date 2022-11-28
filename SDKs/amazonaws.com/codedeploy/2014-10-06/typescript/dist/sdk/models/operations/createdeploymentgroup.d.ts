import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateDeploymentGroupXAmzTargetEnum {
    CodeDeploy20141006CreateDeploymentGroup = "CodeDeploy_20141006.CreateDeploymentGroup"
}
export declare class CreateDeploymentGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateDeploymentGroupXAmzTargetEnum;
}
export declare class CreateDeploymentGroupRequest extends SpeakeasyBase {
    headers: CreateDeploymentGroupHeaders;
    request: shared.CreateDeploymentGroupInput;
}
export declare class CreateDeploymentGroupResponse extends SpeakeasyBase {
    alarmsLimitExceededException?: any;
    applicationDoesNotExistException?: any;
    applicationNameRequiredException?: any;
    contentType: string;
    createDeploymentGroupOutput?: shared.CreateDeploymentGroupOutput;
    deploymentConfigDoesNotExistException?: any;
    deploymentGroupAlreadyExistsException?: any;
    deploymentGroupLimitExceededException?: any;
    deploymentGroupNameRequiredException?: any;
    ecsServiceMappingLimitExceededException?: any;
    invalidAlarmConfigException?: any;
    invalidApplicationNameException?: any;
    invalidAutoRollbackConfigException?: any;
    invalidAutoScalingGroupException?: any;
    invalidBlueGreenDeploymentConfigurationException?: any;
    invalidDeploymentConfigNameException?: any;
    invalidDeploymentGroupNameException?: any;
    invalidDeploymentStyleException?: any;
    invalidEc2TagCombinationException?: any;
    invalidEc2TagException?: any;
    invalidEcsServiceException?: any;
    invalidInputException?: any;
    invalidLoadBalancerInfoException?: any;
    invalidOnPremisesTagCombinationException?: any;
    invalidRoleException?: any;
    invalidTagException?: any;
    invalidTagsToAddException?: any;
    invalidTargetGroupPairException?: any;
    invalidTrafficRoutingConfigurationException?: any;
    invalidTriggerConfigException?: any;
    lifecycleHookLimitExceededException?: any;
    roleRequiredException?: any;
    statusCode: number;
    tagSetListLimitExceededException?: any;
    throttlingException?: any;
    triggerTargetsLimitExceededException?: any;
}
