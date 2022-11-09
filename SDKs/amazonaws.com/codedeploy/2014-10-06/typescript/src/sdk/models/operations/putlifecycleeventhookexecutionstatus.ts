import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PutLifecycleEventHookExecutionStatusXAmzTargetEnum {
    CodeDeploy20141006PutLifecycleEventHookExecutionStatus = "CodeDeploy_20141006.PutLifecycleEventHookExecutionStatus"
}


export class PutLifecycleEventHookExecutionStatusHeaders extends SpeakeasyBase {
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
  xAmzTarget: PutLifecycleEventHookExecutionStatusXAmzTargetEnum;
}


export class PutLifecycleEventHookExecutionStatusRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutLifecycleEventHookExecutionStatusHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PutLifecycleEventHookExecutionStatusInput;
}


export class PutLifecycleEventHookExecutionStatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deploymentDoesNotExistException?: any;

  @Metadata()
  deploymentIdRequiredException?: any;

  @Metadata()
  invalidDeploymentIdException?: any;

  @Metadata()
  invalidLifecycleEventHookExecutionIdException?: any;

  @Metadata()
  invalidLifecycleEventHookExecutionStatusException?: any;

  @Metadata()
  lifecycleEventAlreadyCompletedException?: any;

  @Metadata()
  putLifecycleEventHookExecutionStatusOutput?: shared.PutLifecycleEventHookExecutionStatusOutput;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsupportedActionForDeploymentTypeException?: any;
}
