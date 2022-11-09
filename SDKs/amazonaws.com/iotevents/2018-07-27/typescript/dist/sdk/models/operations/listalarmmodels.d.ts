import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListAlarmModelsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListAlarmModelsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListAlarmModelsRequest extends SpeakeasyBase {
    queryParams: ListAlarmModelsQueryParams;
    headers: ListAlarmModelsHeaders;
}
export declare class ListAlarmModelsResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listAlarmModelsResponse?: shared.ListAlarmModelsResponse;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
