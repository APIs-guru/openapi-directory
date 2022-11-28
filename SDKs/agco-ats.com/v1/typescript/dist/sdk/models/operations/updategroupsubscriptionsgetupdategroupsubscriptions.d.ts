import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateGroupSubscriptionsGetUpdateGroupSubscriptionsQueryParams extends SpeakeasyBase {
    clientId?: string;
    packageTypeId?: string;
    updateGroupId?: string;
    limit?: number;
    offset?: number;
}
export declare class UpdateGroupSubscriptionsGetUpdateGroupSubscriptionsRequest extends SpeakeasyBase {
    queryParams: UpdateGroupSubscriptionsGetUpdateGroupSubscriptionsQueryParams;
}
export declare class UpdateGroupSubscriptionsGetUpdateGroupSubscriptionsResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    apiPagedResponseUpdateSystemModelsUpdateGroupSubscription?: shared.ApiPagedResponseUpdateSystemModelsUpdateGroupSubscription;
    contentType: string;
    statusCode: number;
}
