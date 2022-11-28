import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreateDeploymentXAmzTargetEnum {
    CodeDeploy20141006CreateDeployment = "CodeDeploy_20141006.CreateDeployment"
}


export class CreateDeploymentHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateDeploymentXAmzTargetEnum;
}


export class CreateDeploymentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateDeploymentHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreateDeploymentInput;
}


export class CreateDeploymentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  applicationDoesNotExistException?: any;

  @SpeakeasyMetadata()
  applicationNameRequiredException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createDeploymentOutput?: shared.CreateDeploymentOutput;

  @SpeakeasyMetadata()
  deploymentConfigDoesNotExistException?: any;

  @SpeakeasyMetadata()
  deploymentGroupDoesNotExistException?: any;

  @SpeakeasyMetadata()
  deploymentGroupNameRequiredException?: any;

  @SpeakeasyMetadata()
  deploymentLimitExceededException?: any;

  @SpeakeasyMetadata()
  descriptionTooLongException?: any;

  @SpeakeasyMetadata()
  invalidApplicationNameException?: any;

  @SpeakeasyMetadata()
  invalidAutoRollbackConfigException?: any;

  @SpeakeasyMetadata()
  invalidAutoScalingGroupException?: any;

  @SpeakeasyMetadata()
  invalidDeploymentConfigNameException?: any;

  @SpeakeasyMetadata()
  invalidDeploymentGroupNameException?: any;

  @SpeakeasyMetadata()
  invalidFileExistsBehaviorException?: any;

  @SpeakeasyMetadata()
  invalidGitHubAccountTokenException?: any;

  @SpeakeasyMetadata()
  invalidIgnoreApplicationStopFailuresValueException?: any;

  @SpeakeasyMetadata()
  invalidLoadBalancerInfoException?: any;

  @SpeakeasyMetadata()
  invalidRevisionException?: any;

  @SpeakeasyMetadata()
  invalidRoleException?: any;

  @SpeakeasyMetadata()
  invalidTargetInstancesException?: any;

  @SpeakeasyMetadata()
  invalidTrafficRoutingConfigurationException?: any;

  @SpeakeasyMetadata()
  invalidUpdateOutdatedInstancesOnlyValueException?: any;

  @SpeakeasyMetadata()
  revisionDoesNotExistException?: any;

  @SpeakeasyMetadata()
  revisionRequiredException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;
}
