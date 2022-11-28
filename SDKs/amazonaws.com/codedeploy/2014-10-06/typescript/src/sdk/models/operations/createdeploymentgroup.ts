import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreateDeploymentGroupXAmzTargetEnum {
    CodeDeploy20141006CreateDeploymentGroup = "CodeDeploy_20141006.CreateDeploymentGroup"
}


export class CreateDeploymentGroupHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: CreateDeploymentGroupXAmzTargetEnum;
}


export class CreateDeploymentGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateDeploymentGroupHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreateDeploymentGroupInput;
}


export class CreateDeploymentGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  alarmsLimitExceededException?: any;

  @SpeakeasyMetadata()
  applicationDoesNotExistException?: any;

  @SpeakeasyMetadata()
  applicationNameRequiredException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createDeploymentGroupOutput?: shared.CreateDeploymentGroupOutput;

  @SpeakeasyMetadata()
  deploymentConfigDoesNotExistException?: any;

  @SpeakeasyMetadata()
  deploymentGroupAlreadyExistsException?: any;

  @SpeakeasyMetadata()
  deploymentGroupLimitExceededException?: any;

  @SpeakeasyMetadata()
  deploymentGroupNameRequiredException?: any;

  @SpeakeasyMetadata()
  ecsServiceMappingLimitExceededException?: any;

  @SpeakeasyMetadata()
  invalidAlarmConfigException?: any;

  @SpeakeasyMetadata()
  invalidApplicationNameException?: any;

  @SpeakeasyMetadata()
  invalidAutoRollbackConfigException?: any;

  @SpeakeasyMetadata()
  invalidAutoScalingGroupException?: any;

  @SpeakeasyMetadata()
  invalidBlueGreenDeploymentConfigurationException?: any;

  @SpeakeasyMetadata()
  invalidDeploymentConfigNameException?: any;

  @SpeakeasyMetadata()
  invalidDeploymentGroupNameException?: any;

  @SpeakeasyMetadata()
  invalidDeploymentStyleException?: any;

  @SpeakeasyMetadata()
  invalidEc2TagCombinationException?: any;

  @SpeakeasyMetadata()
  invalidEc2TagException?: any;

  @SpeakeasyMetadata()
  invalidEcsServiceException?: any;

  @SpeakeasyMetadata()
  invalidInputException?: any;

  @SpeakeasyMetadata()
  invalidLoadBalancerInfoException?: any;

  @SpeakeasyMetadata()
  invalidOnPremisesTagCombinationException?: any;

  @SpeakeasyMetadata()
  invalidRoleException?: any;

  @SpeakeasyMetadata()
  invalidTagException?: any;

  @SpeakeasyMetadata()
  invalidTagsToAddException?: any;

  @SpeakeasyMetadata()
  invalidTargetGroupPairException?: any;

  @SpeakeasyMetadata()
  invalidTrafficRoutingConfigurationException?: any;

  @SpeakeasyMetadata()
  invalidTriggerConfigException?: any;

  @SpeakeasyMetadata()
  lifecycleHookLimitExceededException?: any;

  @SpeakeasyMetadata()
  roleRequiredException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tagSetListLimitExceededException?: any;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  triggerTargetsLimitExceededException?: any;
}
