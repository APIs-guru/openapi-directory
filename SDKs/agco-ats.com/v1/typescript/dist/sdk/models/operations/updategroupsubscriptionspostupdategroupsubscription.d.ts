import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateGroupSubscriptionsPostUpdateGroupSubscriptionRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    textXml: Uint8Array;
    updateSystemModelsUpdateGroupSubscription?: shared.UpdateSystemModelsUpdateGroupSubscription;
    updateSystemModelsUpdateGroupSubscription1?: shared.UpdateSystemModelsUpdateGroupSubscription;
    updateSystemModelsUpdateGroupSubscription2?: shared.UpdateSystemModelsUpdateGroupSubscription;
}
export declare class UpdateGroupSubscriptionsPostUpdateGroupSubscriptionRequest extends SpeakeasyBase {
    request: UpdateGroupSubscriptionsPostUpdateGroupSubscriptionRequests;
}
export declare class UpdateGroupSubscriptionsPostUpdateGroupSubscriptionResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    updateGroupSubscriptionsPostUpdateGroupSubscription200ApplicationJsonInt32Integer?: number;
    updateGroupSubscriptionsPostUpdateGroupSubscription200TextJsonInt32Integer?: number;
}
