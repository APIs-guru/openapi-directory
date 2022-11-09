import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateAlarmModelPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=alarmModelName" })
  alarmModelName: string;
}


export class UpdateAlarmModelHeaders extends SpeakeasyBase {
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


// UpdateAlarmModelRequestBodyAlarmCapabilities
/** 
 * Contains the configuration information of alarm state changes.
**/
export class UpdateAlarmModelRequestBodyAlarmCapabilities extends SpeakeasyBase {
  @Metadata({ data: "json, name=acknowledgeFlow" })
  acknowledgeFlow?: shared.AcknowledgeFlow;

  @Metadata({ data: "json, name=initializationConfiguration" })
  initializationConfiguration?: shared.InitializationConfiguration;
}


// UpdateAlarmModelRequestBodyAlarmEventActions
/** 
 * Contains information about one or more alarm actions.
**/
export class UpdateAlarmModelRequestBodyAlarmEventActions extends SpeakeasyBase {
  @Metadata({ data: "json, name=alarmActions", elemType: shared.AlarmAction })
  alarmActions?: shared.AlarmAction[];
}


// UpdateAlarmModelRequestBodyAlarmNotification
/** 
 * Contains information about one or more notification actions.
**/
export class UpdateAlarmModelRequestBodyAlarmNotification extends SpeakeasyBase {
  @Metadata({ data: "json, name=notificationActions", elemType: shared.NotificationAction })
  notificationActions?: shared.NotificationAction[];
}


// UpdateAlarmModelRequestBodyAlarmRule
/** 
 * Defines when your alarm is invoked.
**/
export class UpdateAlarmModelRequestBodyAlarmRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=simpleRule" })
  simpleRule?: shared.SimpleRule;
}


export class UpdateAlarmModelRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=alarmCapabilities" })
  alarmCapabilities?: UpdateAlarmModelRequestBodyAlarmCapabilities;

  @Metadata({ data: "json, name=alarmEventActions" })
  alarmEventActions?: UpdateAlarmModelRequestBodyAlarmEventActions;

  @Metadata({ data: "json, name=alarmModelDescription" })
  alarmModelDescription?: string;

  @Metadata({ data: "json, name=alarmNotification" })
  alarmNotification?: UpdateAlarmModelRequestBodyAlarmNotification;

  @Metadata({ data: "json, name=alarmRule" })
  alarmRule: UpdateAlarmModelRequestBodyAlarmRule;

  @Metadata({ data: "json, name=roleArn" })
  roleArn: string;

  @Metadata({ data: "json, name=severity" })
  severity?: number;
}


export class UpdateAlarmModelRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateAlarmModelPathParams;

  @Metadata()
  headers: UpdateAlarmModelHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateAlarmModelRequestBody;
}


export class UpdateAlarmModelResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceInUseException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  updateAlarmModelResponse?: shared.UpdateAlarmModelResponse;
}
