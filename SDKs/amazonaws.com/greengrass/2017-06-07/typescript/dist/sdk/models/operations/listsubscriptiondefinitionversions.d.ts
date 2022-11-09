import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListSubscriptionDefinitionVersionsPathParams extends SpeakeasyBase {
    subscriptionDefinitionId: string;
}
export declare class ListSubscriptionDefinitionVersionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListSubscriptionDefinitionVersionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListSubscriptionDefinitionVersionsRequest extends SpeakeasyBase {
    pathParams: ListSubscriptionDefinitionVersionsPathParams;
    queryParams: ListSubscriptionDefinitionVersionsQueryParams;
    headers: ListSubscriptionDefinitionVersionsHeaders;
}
export declare class ListSubscriptionDefinitionVersionsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    listSubscriptionDefinitionVersionsResponse?: shared.ListSubscriptionDefinitionVersionsResponse;
    statusCode: number;
}
