import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListDetectMitigationActionsExecutionsQueryParams extends SpeakeasyBase {
    endTime?: Date;
    maxResults?: number;
    nextToken?: string;
    startTime?: Date;
    taskId?: string;
    thingName?: string;
    violationId?: string;
}
export declare class ListDetectMitigationActionsExecutionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListDetectMitigationActionsExecutionsRequest extends SpeakeasyBase {
    queryParams: ListDetectMitigationActionsExecutionsQueryParams;
    headers: ListDetectMitigationActionsExecutionsHeaders;
}
export declare class ListDetectMitigationActionsExecutionsResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listDetectMitigationActionsExecutionsResponse?: shared.ListDetectMitigationActionsExecutionsResponse;
    statusCode: number;
    throttlingException?: any;
}
