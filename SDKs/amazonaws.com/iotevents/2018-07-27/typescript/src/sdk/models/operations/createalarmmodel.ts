import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateAlarmModelHeaders extends SpeakeasyBase {
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


// CreateAlarmModelRequestBodyAlarmCapabilities
/** 
 * Contains the configuration information of alarm state changes.
**/
export class CreateAlarmModelRequestBodyAlarmCapabilities extends SpeakeasyBase {
  @Metadata({ data: "json, name=acknowledgeFlow" })
  acknowledgeFlow?: shared.AcknowledgeFlow;

  @Metadata({ data: "json, name=initializationConfiguration" })
  initializationConfiguration?: shared.InitializationConfiguration;
}


// CreateAlarmModelRequestBodyAlarmEventActions
/** 
 * Contains information about one or more alarm actions.
**/
export class CreateAlarmModelRequestBodyAlarmEventActions extends SpeakeasyBase {
  @Metadata({ data: "json, name=alarmActions", elemType: shared.AlarmAction })
  alarmActions?: shared.AlarmAction[];
}


// CreateAlarmModelRequestBodyAlarmNotification
/** 
 * Contains information about one or more notification actions.
**/
export class CreateAlarmModelRequestBodyAlarmNotification extends SpeakeasyBase {
  @Metadata({ data: "json, name=notificationActions", elemType: shared.NotificationAction })
  notificationActions?: shared.NotificationAction[];
}


// CreateAlarmModelRequestBodyAlarmRule
/** 
 * Defines when your alarm is invoked.
**/
export class CreateAlarmModelRequestBodyAlarmRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=simpleRule" })
  simpleRule?: shared.SimpleRule;
}


export class CreateAlarmModelRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=alarmCapabilities" })
  alarmCapabilities?: CreateAlarmModelRequestBodyAlarmCapabilities;

  @Metadata({ data: "json, name=alarmEventActions" })
  alarmEventActions?: CreateAlarmModelRequestBodyAlarmEventActions;

  @Metadata({ data: "json, name=alarmModelDescription" })
  alarmModelDescription?: string;

  @Metadata({ data: "json, name=alarmModelName" })
  alarmModelName: string;

  @Metadata({ data: "json, name=alarmNotification" })
  alarmNotification?: CreateAlarmModelRequestBodyAlarmNotification;

  @Metadata({ data: "json, name=alarmRule" })
  alarmRule: CreateAlarmModelRequestBodyAlarmRule;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=roleArn" })
  roleArn: string;

  @Metadata({ data: "json, name=severity" })
  severity?: number;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: shared.Tag[];
}


export class CreateAlarmModelRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateAlarmModelHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateAlarmModelRequestBody;
}


export class CreateAlarmModelResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createAlarmModelResponse?: shared.CreateAlarmModelResponse;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceAlreadyExistsException?: any;

  @Metadata()
  resourceInUseException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
