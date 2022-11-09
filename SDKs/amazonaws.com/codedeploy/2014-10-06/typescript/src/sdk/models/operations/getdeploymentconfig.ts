import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetDeploymentConfigXAmzTargetEnum {
    CodeDeploy20141006GetDeploymentConfig = "CodeDeploy_20141006.GetDeploymentConfig"
}


export class GetDeploymentConfigHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetDeploymentConfigXAmzTargetEnum;
}


export class GetDeploymentConfigRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetDeploymentConfigHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetDeploymentConfigInput;
}


export class GetDeploymentConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deploymentConfigDoesNotExistException?: any;

  @Metadata()
  deploymentConfigNameRequiredException?: any;

  @Metadata()
  getDeploymentConfigOutput?: shared.GetDeploymentConfigOutput;

  @Metadata()
  invalidComputePlatformException?: any;

  @Metadata()
  invalidDeploymentConfigNameException?: any;

  @Metadata()
  statusCode: number;
}
