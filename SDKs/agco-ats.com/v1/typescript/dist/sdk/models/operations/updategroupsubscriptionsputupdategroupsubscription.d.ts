import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateGroupSubscriptionsPutUpdateGroupSubscriptionPathParams extends SpeakeasyBase {
    updateGroupSubscriptionId: number;
}
export declare class UpdateGroupSubscriptionsPutUpdateGroupSubscriptionRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    textXml: Uint8Array;
    updateSystemModelsUpdateGroupSubscription?: shared.UpdateSystemModelsUpdateGroupSubscription;
    updateSystemModelsUpdateGroupSubscription1?: shared.UpdateSystemModelsUpdateGroupSubscription;
    updateSystemModelsUpdateGroupSubscription2?: shared.UpdateSystemModelsUpdateGroupSubscription;
}
export declare class UpdateGroupSubscriptionsPutUpdateGroupSubscriptionRequest extends SpeakeasyBase {
    pathParams: UpdateGroupSubscriptionsPutUpdateGroupSubscriptionPathParams;
    request: UpdateGroupSubscriptionsPutUpdateGroupSubscriptionRequests;
}
export declare class UpdateGroupSubscriptionsPutUpdateGroupSubscriptionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
