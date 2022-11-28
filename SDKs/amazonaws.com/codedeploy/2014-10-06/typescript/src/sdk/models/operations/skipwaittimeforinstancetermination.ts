import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum SkipWaitTimeForInstanceTerminationXAmzTargetEnum {
    CodeDeploy20141006SkipWaitTimeForInstanceTermination = "CodeDeploy_20141006.SkipWaitTimeForInstanceTermination"
}


export class SkipWaitTimeForInstanceTerminationHeaders extends SpeakeasyBase {
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
  xAmzTarget: SkipWaitTimeForInstanceTerminationXAmzTargetEnum;
}


export class SkipWaitTimeForInstanceTerminationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: SkipWaitTimeForInstanceTerminationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SkipWaitTimeForInstanceTerminationInput;
}


export class SkipWaitTimeForInstanceTerminationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deploymentAlreadyCompletedException?: any;

  @SpeakeasyMetadata()
  deploymentDoesNotExistException?: any;

  @SpeakeasyMetadata()
  deploymentIdRequiredException?: any;

  @SpeakeasyMetadata()
  deploymentNotStartedException?: any;

  @SpeakeasyMetadata()
  invalidDeploymentIdException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unsupportedActionForDeploymentTypeException?: any;
}
