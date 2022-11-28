import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetDeploymentConfigXAmzTargetEnum {
    CodeDeploy20141006GetDeploymentConfig = "CodeDeploy_20141006.GetDeploymentConfig"
}


export class GetDeploymentConfigHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetDeploymentConfigXAmzTargetEnum;
}


export class GetDeploymentConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetDeploymentConfigHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.GetDeploymentConfigInput;
}


export class GetDeploymentConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deploymentConfigDoesNotExistException?: any;

  @SpeakeasyMetadata()
  deploymentConfigNameRequiredException?: any;

  @SpeakeasyMetadata()
  getDeploymentConfigOutput?: shared.GetDeploymentConfigOutput;

  @SpeakeasyMetadata()
  invalidComputePlatformException?: any;

  @SpeakeasyMetadata()
  invalidDeploymentConfigNameException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
