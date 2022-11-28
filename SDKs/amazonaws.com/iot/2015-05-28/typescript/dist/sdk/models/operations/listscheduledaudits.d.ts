import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListScheduledAuditsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListScheduledAuditsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListScheduledAuditsRequest extends SpeakeasyBase {
    queryParams: ListScheduledAuditsQueryParams;
    headers: ListScheduledAuditsHeaders;
}
export declare class ListScheduledAuditsResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listScheduledAuditsResponse?: shared.ListScheduledAuditsResponse;
    statusCode: number;
    throttlingException?: any;
}
