import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeleteAlarmModelPathParams extends SpeakeasyBase {
    alarmModelName: string;
}
export declare class DeleteAlarmModelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteAlarmModelRequest extends SpeakeasyBase {
    pathParams: DeleteAlarmModelPathParams;
    headers: DeleteAlarmModelHeaders;
}
export declare class DeleteAlarmModelResponse extends SpeakeasyBase {
    contentType: string;
    deleteAlarmModelResponse?: Map<string, any>;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
