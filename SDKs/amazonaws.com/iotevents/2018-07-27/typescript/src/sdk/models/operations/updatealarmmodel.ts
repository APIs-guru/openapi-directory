import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateAlarmModelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=alarmModelName" })
  alarmModelName: string;
}


export class UpdateAlarmModelHeaders extends SpeakeasyBase {
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


// UpdateAlarmModelRequestBodyAlarmCapabilities
/** 
 * Contains the configuration information of alarm state changes.
**/
export class UpdateAlarmModelRequestBodyAlarmCapabilities extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acknowledgeFlow" })
  acknowledgeFlow?: shared.AcknowledgeFlow;

  @SpeakeasyMetadata({ data: "json, name=initializationConfiguration" })
  initializationConfiguration?: shared.InitializationConfiguration;
}


// UpdateAlarmModelRequestBodyAlarmEventActions
/** 
 * Contains information about one or more alarm actions.
**/
export class UpdateAlarmModelRequestBodyAlarmEventActions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alarmActions", elemType: shared.AlarmAction })
  alarmActions?: shared.AlarmAction[];
}


// UpdateAlarmModelRequestBodyAlarmNotification
/** 
 * Contains information about one or more notification actions.
**/
export class UpdateAlarmModelRequestBodyAlarmNotification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=notificationActions", elemType: shared.NotificationAction })
  notificationActions?: shared.NotificationAction[];
}


// UpdateAlarmModelRequestBodyAlarmRule
/** 
 * Defines when your alarm is invoked.
**/
export class UpdateAlarmModelRequestBodyAlarmRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=simpleRule" })
  simpleRule?: shared.SimpleRule;
}


export class UpdateAlarmModelRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alarmCapabilities" })
  alarmCapabilities?: UpdateAlarmModelRequestBodyAlarmCapabilities;

  @SpeakeasyMetadata({ data: "json, name=alarmEventActions" })
  alarmEventActions?: UpdateAlarmModelRequestBodyAlarmEventActions;

  @SpeakeasyMetadata({ data: "json, name=alarmModelDescription" })
  alarmModelDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=alarmNotification" })
  alarmNotification?: UpdateAlarmModelRequestBodyAlarmNotification;

  @SpeakeasyMetadata({ data: "json, name=alarmRule" })
  alarmRule: UpdateAlarmModelRequestBodyAlarmRule;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: number;
}


export class UpdateAlarmModelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateAlarmModelPathParams;

  @SpeakeasyMetadata()
  headers: UpdateAlarmModelHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateAlarmModelRequestBody;
}


export class UpdateAlarmModelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  resourceInUseException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  updateAlarmModelResponse?: shared.UpdateAlarmModelResponse;
}
