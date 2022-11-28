import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAlarmsPathParams extends SpeakeasyBase {
    alarmModelName: string;
}
export declare class ListAlarmsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListAlarmsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListAlarmsRequest extends SpeakeasyBase {
    pathParams: ListAlarmsPathParams;
    queryParams: ListAlarmsQueryParams;
    headers: ListAlarmsHeaders;
}
export declare class ListAlarmsResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listAlarmsResponse?: shared.ListAlarmsResponse;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
