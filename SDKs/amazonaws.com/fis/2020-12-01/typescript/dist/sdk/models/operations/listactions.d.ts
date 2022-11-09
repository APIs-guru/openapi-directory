import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListActionsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListActionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListActionsRequest extends SpeakeasyBase {
    queryParams: ListActionsQueryParams;
    headers: ListActionsHeaders;
}
export declare class ListActionsResponse extends SpeakeasyBase {
    contentType: string;
    listActionsResponse?: shared.ListActionsResponse;
    statusCode: number;
    validationException?: any;
}
