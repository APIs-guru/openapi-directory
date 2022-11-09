import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateDeploymentConfigXAmzTargetEnum {
    CodeDeploy20141006CreateDeploymentConfig = "CodeDeploy_20141006.CreateDeploymentConfig"
}


export class CreateDeploymentConfigHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateDeploymentConfigXAmzTargetEnum;
}


export class CreateDeploymentConfigRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateDeploymentConfigHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateDeploymentConfigInput;
}


export class CreateDeploymentConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createDeploymentConfigOutput?: shared.CreateDeploymentConfigOutput;

  @Metadata()
  deploymentConfigAlreadyExistsException?: any;

  @Metadata()
  deploymentConfigLimitExceededException?: any;

  @Metadata()
  deploymentConfigNameRequiredException?: any;

  @Metadata()
  invalidComputePlatformException?: any;

  @Metadata()
  invalidDeploymentConfigNameException?: any;

  @Metadata()
  invalidMinimumHealthyHostValueException?: any;

  @Metadata()
  invalidTrafficRoutingConfigurationException?: any;

  @Metadata()
  statusCode: number;
}
