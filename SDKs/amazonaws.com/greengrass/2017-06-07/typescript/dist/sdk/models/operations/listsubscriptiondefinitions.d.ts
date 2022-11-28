import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListSubscriptionDefinitionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListSubscriptionDefinitionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListSubscriptionDefinitionsRequest extends SpeakeasyBase {
    queryParams: ListSubscriptionDefinitionsQueryParams;
    headers: ListSubscriptionDefinitionsHeaders;
}
export declare class ListSubscriptionDefinitionsResponse extends SpeakeasyBase {
    contentType: string;
    listSubscriptionDefinitionsResponse?: shared.ListSubscriptionDefinitionsResponse;
    statusCode: number;
}
