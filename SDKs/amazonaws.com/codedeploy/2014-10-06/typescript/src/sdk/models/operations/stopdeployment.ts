import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum StopDeploymentXAmzTargetEnum {
    CodeDeploy20141006StopDeployment = "CodeDeploy_20141006.StopDeployment"
}


export class StopDeploymentHeaders extends SpeakeasyBase {
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
  xAmzTarget: StopDeploymentXAmzTargetEnum;
}


export class StopDeploymentRequest extends SpeakeasyBase {
  @Metadata()
  headers: StopDeploymentHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.StopDeploymentInput;
}


export class StopDeploymentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deploymentAlreadyCompletedException?: any;

  @Metadata()
  deploymentDoesNotExistException?: any;

  @Metadata()
  deploymentGroupDoesNotExistException?: any;

  @Metadata()
  deploymentIdRequiredException?: any;

  @Metadata()
  invalidDeploymentIdException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  stopDeploymentOutput?: shared.StopDeploymentOutput;

  @Metadata()
  unsupportedActionForDeploymentTypeException?: any;
}
