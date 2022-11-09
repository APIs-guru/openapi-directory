import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteDeploymentConfigXAmzTargetEnum {
    CodeDeploy20141006DeleteDeploymentConfig = "CodeDeploy_20141006.DeleteDeploymentConfig"
}


export class DeleteDeploymentConfigHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteDeploymentConfigXAmzTargetEnum;
}


export class DeleteDeploymentConfigRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteDeploymentConfigHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteDeploymentConfigInput;
}


export class DeleteDeploymentConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deploymentConfigInUseException?: any;

  @Metadata()
  deploymentConfigNameRequiredException?: any;

  @Metadata()
  invalidDeploymentConfigNameException?: any;

  @Metadata()
  invalidOperationException?: any;

  @Metadata()
  statusCode: number;
}
