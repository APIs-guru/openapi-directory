import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateDeploymentXAmzTargetEnum {
    CodeDeploy20141006CreateDeployment = "CodeDeploy_20141006.CreateDeployment"
}


export class CreateDeploymentHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateDeploymentXAmzTargetEnum;
}


export class CreateDeploymentRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateDeploymentHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateDeploymentInput;
}


export class CreateDeploymentResponse extends SpeakeasyBase {
  @Metadata()
  applicationDoesNotExistException?: any;

  @Metadata()
  applicationNameRequiredException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createDeploymentOutput?: shared.CreateDeploymentOutput;

  @Metadata()
  deploymentConfigDoesNotExistException?: any;

  @Metadata()
  deploymentGroupDoesNotExistException?: any;

  @Metadata()
  deploymentGroupNameRequiredException?: any;

  @Metadata()
  deploymentLimitExceededException?: any;

  @Metadata()
  descriptionTooLongException?: any;

  @Metadata()
  invalidApplicationNameException?: any;

  @Metadata()
  invalidAutoRollbackConfigException?: any;

  @Metadata()
  invalidAutoScalingGroupException?: any;

  @Metadata()
  invalidDeploymentConfigNameException?: any;

  @Metadata()
  invalidDeploymentGroupNameException?: any;

  @Metadata()
  invalidFileExistsBehaviorException?: any;

  @Metadata()
  invalidGitHubAccountTokenException?: any;

  @Metadata()
  invalidIgnoreApplicationStopFailuresValueException?: any;

  @Metadata()
  invalidLoadBalancerInfoException?: any;

  @Metadata()
  invalidRevisionException?: any;

  @Metadata()
  invalidRoleException?: any;

  @Metadata()
  invalidTargetInstancesException?: any;

  @Metadata()
  invalidTrafficRoutingConfigurationException?: any;

  @Metadata()
  invalidUpdateOutdatedInstancesOnlyValueException?: any;

  @Metadata()
  revisionDoesNotExistException?: any;

  @Metadata()
  revisionRequiredException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
