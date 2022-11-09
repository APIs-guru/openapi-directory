import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetDeploymentXAmzTargetEnum {
    CodeDeploy20141006GetDeployment = "CodeDeploy_20141006.GetDeployment"
}


export class GetDeploymentHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetDeploymentXAmzTargetEnum;
}


export class GetDeploymentRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetDeploymentHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetDeploymentInput;
}


export class GetDeploymentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deploymentDoesNotExistException?: any;

  @Metadata()
  deploymentIdRequiredException?: any;

  @Metadata()
  getDeploymentOutput?: shared.GetDeploymentOutput;

  @Metadata()
  invalidDeploymentIdException?: any;

  @Metadata()
  statusCode: number;
}
