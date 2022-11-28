import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClientsGetSubscriptionsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ClientsGetSubscriptionsQueryParams extends SpeakeasyBase {
    updateGroupId?: string;
    limit?: number;
    offset?: number;
}
export declare class ClientsGetSubscriptionsRequest extends SpeakeasyBase {
    pathParams: ClientsGetSubscriptionsPathParams;
    queryParams: ClientsGetSubscriptionsQueryParams;
}
export declare class ClientsGetSubscriptionsResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    apiPagedResponseUpdateSystemModelsUpdateGroupSubscription?: shared.ApiPagedResponseUpdateSystemModelsUpdateGroupSubscription;
    contentType: string;
    statusCode: number;
}
