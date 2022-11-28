import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateAlarmModelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Contains the configuration information of alarm state changes.
**/
export declare class CreateAlarmModelRequestBodyAlarmCapabilities extends SpeakeasyBase {
    acknowledgeFlow?: shared.AcknowledgeFlow;
    initializationConfiguration?: shared.InitializationConfiguration;
}
/**
 * Contains information about one or more alarm actions.
**/
export declare class CreateAlarmModelRequestBodyAlarmEventActions extends SpeakeasyBase {
    alarmActions?: shared.AlarmAction[];
}
/**
 * Contains information about one or more notification actions.
**/
export declare class CreateAlarmModelRequestBodyAlarmNotification extends SpeakeasyBase {
    notificationActions?: shared.NotificationAction[];
}
/**
 * Defines when your alarm is invoked.
**/
export declare class CreateAlarmModelRequestBodyAlarmRule extends SpeakeasyBase {
    simpleRule?: shared.SimpleRule;
}
export declare class CreateAlarmModelRequestBody extends SpeakeasyBase {
    alarmCapabilities?: CreateAlarmModelRequestBodyAlarmCapabilities;
    alarmEventActions?: CreateAlarmModelRequestBodyAlarmEventActions;
    alarmModelDescription?: string;
    alarmModelName: string;
    alarmNotification?: CreateAlarmModelRequestBodyAlarmNotification;
    alarmRule: CreateAlarmModelRequestBodyAlarmRule;
    key?: string;
    roleArn: string;
    severity?: number;
    tags?: shared.Tag[];
}
export declare class CreateAlarmModelRequest extends SpeakeasyBase {
    headers: CreateAlarmModelHeaders;
    request: CreateAlarmModelRequestBody;
}
export declare class CreateAlarmModelResponse extends SpeakeasyBase {
    contentType: string;
    createAlarmModelResponse?: shared.CreateAlarmModelResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    resourceAlreadyExistsException?: any;
    resourceInUseException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
