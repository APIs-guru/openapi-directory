import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StartAuditMitigationActionsTaskPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=taskId" })
  taskId: string;
}


export class StartAuditMitigationActionsTaskHeaders extends SpeakeasyBase {
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
}


// StartAuditMitigationActionsTaskRequestBodyTarget
/** 
 * Used in MitigationActionParams, this information identifies the target findings to which the mitigation actions are applied. Only one entry appears.
**/
export class StartAuditMitigationActionsTaskRequestBodyTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auditCheckToReasonCodeFilter" })
  auditCheckToReasonCodeFilter?: Map<string, string[]>;

  @SpeakeasyMetadata({ data: "json, name=auditTaskId" })
  auditTaskId?: string;

  @SpeakeasyMetadata({ data: "json, name=findingIds" })
  findingIds?: string[];
}


export class StartAuditMitigationActionsTaskRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auditCheckToActionsMapping" })
  auditCheckToActionsMapping: Map<string, string[]>;

  @SpeakeasyMetadata({ data: "json, name=clientRequestToken" })
  clientRequestToken: string;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target: StartAuditMitigationActionsTaskRequestBodyTarget;
}


export class StartAuditMitigationActionsTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StartAuditMitigationActionsTaskPathParams;

  @SpeakeasyMetadata()
  headers: StartAuditMitigationActionsTaskHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: StartAuditMitigationActionsTaskRequestBody;
}


export class StartAuditMitigationActionsTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  startAuditMitigationActionsTaskResponse?: shared.StartAuditMitigationActionsTaskResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  taskAlreadyExistsException?: any;

  @SpeakeasyMetadata()
  throttlingException?: any;
}
