import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreateDeploymentConfigXAmzTargetEnum {
    CodeDeploy20141006CreateDeploymentConfig = "CodeDeploy_20141006.CreateDeploymentConfig"
}


export class CreateDeploymentConfigHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateDeploymentConfigXAmzTargetEnum;
}


export class CreateDeploymentConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateDeploymentConfigHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreateDeploymentConfigInput;
}


export class CreateDeploymentConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createDeploymentConfigOutput?: shared.CreateDeploymentConfigOutput;

  @SpeakeasyMetadata()
  deploymentConfigAlreadyExistsException?: any;

  @SpeakeasyMetadata()
  deploymentConfigLimitExceededException?: any;

  @SpeakeasyMetadata()
  deploymentConfigNameRequiredException?: any;

  @SpeakeasyMetadata()
  invalidComputePlatformException?: any;

  @SpeakeasyMetadata()
  invalidDeploymentConfigNameException?: any;

  @SpeakeasyMetadata()
  invalidMinimumHealthyHostValueException?: any;

  @SpeakeasyMetadata()
  invalidTrafficRoutingConfigurationException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
