import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetDeploymentXAmzTargetEnum {
    CodeDeploy20141006GetDeployment = "CodeDeploy_20141006.GetDeployment"
}


export class GetDeploymentHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetDeploymentXAmzTargetEnum;
}


export class GetDeploymentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetDeploymentHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.GetDeploymentInput;
}


export class GetDeploymentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deploymentDoesNotExistException?: any;

  @SpeakeasyMetadata()
  deploymentIdRequiredException?: any;

  @SpeakeasyMetadata()
  getDeploymentOutput?: shared.GetDeploymentOutput;

  @SpeakeasyMetadata()
  invalidDeploymentIdException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
