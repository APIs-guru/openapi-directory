import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StartDetectMitigationActionsTaskPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=taskId" })
  taskId: string;
}


export class StartDetectMitigationActionsTaskHeaders extends SpeakeasyBase {
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


// StartDetectMitigationActionsTaskRequestBodyTarget
/** 
 *  The target of a mitigation action task. 
**/
export class StartDetectMitigationActionsTaskRequestBodyTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=behaviorName" })
  behaviorName?: string;

  @SpeakeasyMetadata({ data: "json, name=securityProfileName" })
  securityProfileName?: string;

  @SpeakeasyMetadata({ data: "json, name=violationIds" })
  violationIds?: string[];
}


// StartDetectMitigationActionsTaskRequestBodyViolationEventOccurrenceRange
/** 
 *  Specifies the time period of which violation events occurred between. 
**/
export class StartDetectMitigationActionsTaskRequestBodyViolationEventOccurrenceRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: Date;
}


export class StartDetectMitigationActionsTaskRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actions" })
  actions: string[];

  @SpeakeasyMetadata({ data: "json, name=clientRequestToken" })
  clientRequestToken: string;

  @SpeakeasyMetadata({ data: "json, name=includeOnlyActiveViolations" })
  includeOnlyActiveViolations?: boolean;

  @SpeakeasyMetadata({ data: "json, name=includeSuppressedAlerts" })
  includeSuppressedAlerts?: boolean;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target: StartDetectMitigationActionsTaskRequestBodyTarget;

  @SpeakeasyMetadata({ data: "json, name=violationEventOccurrenceRange" })
  violationEventOccurrenceRange?: StartDetectMitigationActionsTaskRequestBodyViolationEventOccurrenceRange;
}


export class StartDetectMitigationActionsTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StartDetectMitigationActionsTaskPathParams;

  @SpeakeasyMetadata()
  headers: StartDetectMitigationActionsTaskHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: StartDetectMitigationActionsTaskRequestBody;
}


export class StartDetectMitigationActionsTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  startDetectMitigationActionsTaskResponse?: shared.StartDetectMitigationActionsTaskResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  taskAlreadyExistsException?: any;

  @SpeakeasyMetadata()
  throttlingException?: any;
}
