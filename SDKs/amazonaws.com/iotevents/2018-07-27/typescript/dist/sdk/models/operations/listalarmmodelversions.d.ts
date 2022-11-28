import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAlarmModelVersionsPathParams extends SpeakeasyBase {
    alarmModelName: string;
}
export declare class ListAlarmModelVersionsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListAlarmModelVersionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListAlarmModelVersionsRequest extends SpeakeasyBase {
    pathParams: ListAlarmModelVersionsPathParams;
    queryParams: ListAlarmModelVersionsQueryParams;
    headers: ListAlarmModelVersionsHeaders;
}
export declare class ListAlarmModelVersionsResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listAlarmModelVersionsResponse?: shared.ListAlarmModelVersionsResponse;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
