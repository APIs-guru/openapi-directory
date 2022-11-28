import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum PutLifecycleEventHookExecutionStatusXAmzTargetEnum {
    CodeDeploy20141006PutLifecycleEventHookExecutionStatus = "CodeDeploy_20141006.PutLifecycleEventHookExecutionStatus"
}


export class PutLifecycleEventHookExecutionStatusHeaders extends SpeakeasyBase {
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
  xAmzTarget: PutLifecycleEventHookExecutionStatusXAmzTargetEnum;
}


export class PutLifecycleEventHookExecutionStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PutLifecycleEventHookExecutionStatusHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PutLifecycleEventHookExecutionStatusInput;
}


export class PutLifecycleEventHookExecutionStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deploymentDoesNotExistException?: any;

  @SpeakeasyMetadata()
  deploymentIdRequiredException?: any;

  @SpeakeasyMetadata()
  invalidDeploymentIdException?: any;

  @SpeakeasyMetadata()
  invalidLifecycleEventHookExecutionIdException?: any;

  @SpeakeasyMetadata()
  invalidLifecycleEventHookExecutionStatusException?: any;

  @SpeakeasyMetadata()
  lifecycleEventAlreadyCompletedException?: any;

  @SpeakeasyMetadata()
  putLifecycleEventHookExecutionStatusOutput?: shared.PutLifecycleEventHookExecutionStatusOutput;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unsupportedActionForDeploymentTypeException?: any;
}
