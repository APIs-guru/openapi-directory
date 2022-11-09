import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateDeploymentGroupXAmzTargetEnum {
    CodeDeploy20141006CreateDeploymentGroup = "CodeDeploy_20141006.CreateDeploymentGroup"
}


export class CreateDeploymentGroupHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: CreateDeploymentGroupXAmzTargetEnum;
}


export class CreateDeploymentGroupRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateDeploymentGroupHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateDeploymentGroupInput;
}


export class CreateDeploymentGroupResponse extends SpeakeasyBase {
  @Metadata()
  alarmsLimitExceededException?: any;

  @Metadata()
  applicationDoesNotExistException?: any;

  @Metadata()
  applicationNameRequiredException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createDeploymentGroupOutput?: shared.CreateDeploymentGroupOutput;

  @Metadata()
  deploymentConfigDoesNotExistException?: any;

  @Metadata()
  deploymentGroupAlreadyExistsException?: any;

  @Metadata()
  deploymentGroupLimitExceededException?: any;

  @Metadata()
  deploymentGroupNameRequiredException?: any;

  @Metadata()
  ecsServiceMappingLimitExceededException?: any;

  @Metadata()
  invalidAlarmConfigException?: any;

  @Metadata()
  invalidApplicationNameException?: any;

  @Metadata()
  invalidAutoRollbackConfigException?: any;

  @Metadata()
  invalidAutoScalingGroupException?: any;

  @Metadata()
  invalidBlueGreenDeploymentConfigurationException?: any;

  @Metadata()
  invalidDeploymentConfigNameException?: any;

  @Metadata()
  invalidDeploymentGroupNameException?: any;

  @Metadata()
  invalidDeploymentStyleException?: any;

  @Metadata()
  invalidEc2TagCombinationException?: any;

  @Metadata()
  invalidEc2TagException?: any;

  @Metadata()
  invalidEcsServiceException?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  invalidLoadBalancerInfoException?: any;

  @Metadata()
  invalidOnPremisesTagCombinationException?: any;

  @Metadata()
  invalidRoleException?: any;

  @Metadata()
  invalidTagException?: any;

  @Metadata()
  invalidTagsToAddException?: any;

  @Metadata()
  invalidTargetGroupPairException?: any;

  @Metadata()
  invalidTrafficRoutingConfigurationException?: any;

  @Metadata()
  invalidTriggerConfigException?: any;

  @Metadata()
  lifecycleHookLimitExceededException?: any;

  @Metadata()
  roleRequiredException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tagSetListLimitExceededException?: any;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  triggerTargetsLimitExceededException?: any;
}
