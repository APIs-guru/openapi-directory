import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ContinueDeploymentXAmzTargetEnum {
    CodeDeploy20141006ContinueDeployment = "CodeDeploy_20141006.ContinueDeployment"
}


export class ContinueDeploymentHeaders extends SpeakeasyBase {
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
  xAmzTarget: ContinueDeploymentXAmzTargetEnum;
}


export class ContinueDeploymentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ContinueDeploymentHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ContinueDeploymentInput;
}


export class ContinueDeploymentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deploymentAlreadyCompletedException?: any;

  @SpeakeasyMetadata()
  deploymentDoesNotExistException?: any;

  @SpeakeasyMetadata()
  deploymentIdRequiredException?: any;

  @SpeakeasyMetadata()
  deploymentIsNotInReadyStateException?: any;

  @SpeakeasyMetadata()
  invalidDeploymentIdException?: any;

  @SpeakeasyMetadata()
  invalidDeploymentStatusException?: any;

  @SpeakeasyMetadata()
  invalidDeploymentWaitTypeException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unsupportedActionForDeploymentTypeException?: any;
}
