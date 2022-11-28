import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClientsGetAvailableSubscriptionsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ClientsGetAvailableSubscriptionsQueryParams extends SpeakeasyBase {
    updateGroupId?: string;
    limit?: number;
    offset?: number;
}
export declare class ClientsGetAvailableSubscriptionsRequest extends SpeakeasyBase {
    pathParams: ClientsGetAvailableSubscriptionsPathParams;
    queryParams: ClientsGetAvailableSubscriptionsQueryParams;
}
export declare class ClientsGetAvailableSubscriptionsResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    apiPagedResponseUpdateSystemModelsAvailableUpdateGroupSubscription?: shared.ApiPagedResponseUpdateSystemModelsAvailableUpdateGroupSubscription;
    contentType: string;
    statusCode: number;
}
