import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListNotificationRulesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListNotificationRulesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListNotificationRulesRequestBody extends SpeakeasyBase {
    filters?: shared.ListNotificationRulesFilter[];
    maxResults?: number;
    nextToken?: string;
}
export declare class ListNotificationRulesRequest extends SpeakeasyBase {
    queryParams: ListNotificationRulesQueryParams;
    headers: ListNotificationRulesHeaders;
    request: ListNotificationRulesRequestBody;
}
export declare class ListNotificationRulesResponse extends SpeakeasyBase {
    contentType: string;
    invalidNextTokenException?: any;
    listNotificationRulesResult?: shared.ListNotificationRulesResult;
    statusCode: number;
    validationException?: any;
}
