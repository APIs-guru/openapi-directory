import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateGroupSubscriptionsGetUpdateGroupSubscriptionPathParams extends SpeakeasyBase {
    updateGroupSubscriptionId: number;
}
export declare class UpdateGroupSubscriptionsGetUpdateGroupSubscriptionRequest extends SpeakeasyBase {
    pathParams: UpdateGroupSubscriptionsGetUpdateGroupSubscriptionPathParams;
}
export declare class UpdateGroupSubscriptionsGetUpdateGroupSubscriptionResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    updateSystemModelsUpdateGroupSubscription?: shared.UpdateSystemModelsUpdateGroupSubscription;
}
