import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateAlarmModelHeaders extends SpeakeasyBase {
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


// CreateAlarmModelRequestBodyAlarmCapabilities
/** 
 * Contains the configuration information of alarm state changes.
**/
export class CreateAlarmModelRequestBodyAlarmCapabilities extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acknowledgeFlow" })
  acknowledgeFlow?: shared.AcknowledgeFlow;

  @SpeakeasyMetadata({ data: "json, name=initializationConfiguration" })
  initializationConfiguration?: shared.InitializationConfiguration;
}


// CreateAlarmModelRequestBodyAlarmEventActions
/** 
 * Contains information about one or more alarm actions.
**/
export class CreateAlarmModelRequestBodyAlarmEventActions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alarmActions", elemType: shared.AlarmAction })
  alarmActions?: shared.AlarmAction[];
}


// CreateAlarmModelRequestBodyAlarmNotification
/** 
 * Contains information about one or more notification actions.
**/
export class CreateAlarmModelRequestBodyAlarmNotification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=notificationActions", elemType: shared.NotificationAction })
  notificationActions?: shared.NotificationAction[];
}


// CreateAlarmModelRequestBodyAlarmRule
/** 
 * Defines when your alarm is invoked.
**/
export class CreateAlarmModelRequestBodyAlarmRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=simpleRule" })
  simpleRule?: shared.SimpleRule;
}


export class CreateAlarmModelRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alarmCapabilities" })
  alarmCapabilities?: CreateAlarmModelRequestBodyAlarmCapabilities;

  @SpeakeasyMetadata({ data: "json, name=alarmEventActions" })
  alarmEventActions?: CreateAlarmModelRequestBodyAlarmEventActions;

  @SpeakeasyMetadata({ data: "json, name=alarmModelDescription" })
  alarmModelDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=alarmModelName" })
  alarmModelName: string;

  @SpeakeasyMetadata({ data: "json, name=alarmNotification" })
  alarmNotification?: CreateAlarmModelRequestBodyAlarmNotification;

  @SpeakeasyMetadata({ data: "json, name=alarmRule" })
  alarmRule: CreateAlarmModelRequestBodyAlarmRule;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: number;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: shared.Tag[];
}


export class CreateAlarmModelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateAlarmModelHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateAlarmModelRequestBody;
}


export class CreateAlarmModelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createAlarmModelResponse?: shared.CreateAlarmModelResponse;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  resourceAlreadyExistsException?: any;

  @SpeakeasyMetadata()
  resourceInUseException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;
}
