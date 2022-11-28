import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateGroupClientRelationshipsGetSubscriptionPathParams extends SpeakeasyBase {
    relationshipId: string;
}
export declare class UpdateGroupClientRelationshipsGetSubscriptionRequest extends SpeakeasyBase {
    pathParams: UpdateGroupClientRelationshipsGetSubscriptionPathParams;
}
export declare class UpdateGroupClientRelationshipsGetSubscriptionResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    updateSystemModelsUpdateGroupClientRelationship?: shared.UpdateSystemModelsUpdateGroupClientRelationship;
}
