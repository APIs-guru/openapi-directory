import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StartDetectMitigationActionsTaskPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=taskId" })
  taskId: string;
}


export class StartDetectMitigationActionsTaskHeaders extends SpeakeasyBase {
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


// StartDetectMitigationActionsTaskRequestBodyTarget
/** 
 *  The target of a mitigation action task. 
**/
export class StartDetectMitigationActionsTaskRequestBodyTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=behaviorName" })
  behaviorName?: string;

  @Metadata({ data: "json, name=securityProfileName" })
  securityProfileName?: string;

  @Metadata({ data: "json, name=violationIds" })
  violationIds?: string[];
}


// StartDetectMitigationActionsTaskRequestBodyViolationEventOccurrenceRange
/** 
 *  Specifies the time period of which violation events occurred between. 
**/
export class StartDetectMitigationActionsTaskRequestBodyViolationEventOccurrenceRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=startTime" })
  startTime?: Date;
}


export class StartDetectMitigationActionsTaskRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=actions" })
  actions: string[];

  @Metadata({ data: "json, name=clientRequestToken" })
  clientRequestToken: string;

  @Metadata({ data: "json, name=includeOnlyActiveViolations" })
  includeOnlyActiveViolations?: boolean;

  @Metadata({ data: "json, name=includeSuppressedAlerts" })
  includeSuppressedAlerts?: boolean;

  @Metadata({ data: "json, name=target" })
  target: StartDetectMitigationActionsTaskRequestBodyTarget;

  @Metadata({ data: "json, name=violationEventOccurrenceRange" })
  violationEventOccurrenceRange?: StartDetectMitigationActionsTaskRequestBodyViolationEventOccurrenceRange;
}


export class StartDetectMitigationActionsTaskRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StartDetectMitigationActionsTaskPathParams;

  @Metadata()
  headers: StartDetectMitigationActionsTaskHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: StartDetectMitigationActionsTaskRequestBody;
}


export class StartDetectMitigationActionsTaskResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  startDetectMitigationActionsTaskResponse?: shared.StartDetectMitigationActionsTaskResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  taskAlreadyExistsException?: any;

  @Metadata()
  throttlingException?: any;
}
