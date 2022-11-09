import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StartAuditMitigationActionsTaskPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=taskId" })
  taskId: string;
}


export class StartAuditMitigationActionsTaskHeaders extends SpeakeasyBase {
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
}


// StartAuditMitigationActionsTaskRequestBodyTarget
/** 
 * Used in MitigationActionParams, this information identifies the target findings to which the mitigation actions are applied. Only one entry appears.
**/
export class StartAuditMitigationActionsTaskRequestBodyTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=auditCheckToReasonCodeFilter" })
  auditCheckToReasonCodeFilter?: Map<string, string[]>;

  @Metadata({ data: "json, name=auditTaskId" })
  auditTaskId?: string;

  @Metadata({ data: "json, name=findingIds" })
  findingIds?: string[];
}


export class StartAuditMitigationActionsTaskRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=auditCheckToActionsMapping" })
  auditCheckToActionsMapping: Map<string, string[]>;

  @Metadata({ data: "json, name=clientRequestToken" })
  clientRequestToken: string;

  @Metadata({ data: "json, name=target" })
  target: StartAuditMitigationActionsTaskRequestBodyTarget;
}


export class StartAuditMitigationActionsTaskRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StartAuditMitigationActionsTaskPathParams;

  @Metadata()
  headers: StartAuditMitigationActionsTaskHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: StartAuditMitigationActionsTaskRequestBody;
}


export class StartAuditMitigationActionsTaskResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  startAuditMitigationActionsTaskResponse?: shared.StartAuditMitigationActionsTaskResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  taskAlreadyExistsException?: any;

  @Metadata()
  throttlingException?: any;
}
