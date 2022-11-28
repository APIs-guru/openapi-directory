import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateDeploymentGroupXAmzTargetEnum {
    CodeDeploy20141006UpdateDeploymentGroup = "CodeDeploy_20141006.UpdateDeploymentGroup"
}
export declare class UpdateDeploymentGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateDeploymentGroupXAmzTargetEnum;
}
export declare class UpdateDeploymentGroupRequest extends SpeakeasyBase {
    headers: UpdateDeploymentGroupHeaders;
    request: shared.UpdateDeploymentGroupInput;
}
export declare class UpdateDeploymentGroupResponse extends SpeakeasyBase {
    alarmsLimitExceededException?: any;
    applicationDoesNotExistException?: any;
    applicationNameRequiredException?: any;
    contentType: string;
    deploymentConfigDoesNotExistException?: any;
    deploymentGroupAlreadyExistsException?: any;
    deploymentGroupDoesNotExistException?: any;
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
    invalidTargetGroupPairException?: any;
    invalidTrafficRoutingConfigurationException?: any;
    invalidTriggerConfigException?: any;
    lifecycleHookLimitExceededException?: any;
    statusCode: number;
    tagSetListLimitExceededException?: any;
    throttlingException?: any;
    triggerTargetsLimitExceededException?: any;
    updateDeploymentGroupOutput?: shared.UpdateDeploymentGroupOutput;
}
