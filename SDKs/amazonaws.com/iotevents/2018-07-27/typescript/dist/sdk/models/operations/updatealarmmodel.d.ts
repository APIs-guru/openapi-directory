import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateAlarmModelPathParams extends SpeakeasyBase {
    alarmModelName: string;
}
export declare class UpdateAlarmModelHeaders extends SpeakeasyBase {
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
export declare class UpdateAlarmModelRequestBodyAlarmCapabilities extends SpeakeasyBase {
    acknowledgeFlow?: shared.AcknowledgeFlow;
    initializationConfiguration?: shared.InitializationConfiguration;
}
/**
 * Contains information about one or more alarm actions.
**/
export declare class UpdateAlarmModelRequestBodyAlarmEventActions extends SpeakeasyBase {
    alarmActions?: shared.AlarmAction[];
}
/**
 * Contains information about one or more notification actions.
**/
export declare class UpdateAlarmModelRequestBodyAlarmNotification extends SpeakeasyBase {
    notificationActions?: shared.NotificationAction[];
}
/**
 * Defines when your alarm is invoked.
**/
export declare class UpdateAlarmModelRequestBodyAlarmRule extends SpeakeasyBase {
    simpleRule?: shared.SimpleRule;
}
export declare class UpdateAlarmModelRequestBody extends SpeakeasyBase {
    alarmCapabilities?: UpdateAlarmModelRequestBodyAlarmCapabilities;
    alarmEventActions?: UpdateAlarmModelRequestBodyAlarmEventActions;
    alarmModelDescription?: string;
    alarmNotification?: UpdateAlarmModelRequestBodyAlarmNotification;
    alarmRule: UpdateAlarmModelRequestBodyAlarmRule;
    roleArn: string;
    severity?: number;
}
export declare class UpdateAlarmModelRequest extends SpeakeasyBase {
    pathParams: UpdateAlarmModelPathParams;
    headers: UpdateAlarmModelHeaders;
    request: UpdateAlarmModelRequestBody;
}
export declare class UpdateAlarmModelResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    updateAlarmModelResponse?: shared.UpdateAlarmModelResponse;
}
