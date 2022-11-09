import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListWebhooksPathParams extends SpeakeasyBase {
    appId: string;
}
export declare class ListWebhooksQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListWebhooksHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListWebhooksRequest extends SpeakeasyBase {
    pathParams: ListWebhooksPathParams;
    queryParams: ListWebhooksQueryParams;
    headers: ListWebhooksHeaders;
}
export declare class ListWebhooksResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    internalFailureException?: any;
    limitExceededException?: any;
    listWebhooksResult?: shared.ListWebhooksResult;
    statusCode: number;
    unauthorizedException?: any;
}
