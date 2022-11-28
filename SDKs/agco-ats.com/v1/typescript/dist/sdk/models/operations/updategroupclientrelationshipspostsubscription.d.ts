import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateGroupClientRelationshipsPostSubscriptionRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    textXml: Uint8Array;
    updateSystemModelsUpdateGroupClientRelationship?: shared.UpdateSystemModelsUpdateGroupClientRelationship;
    updateSystemModelsUpdateGroupClientRelationship1?: shared.UpdateSystemModelsUpdateGroupClientRelationship;
    updateSystemModelsUpdateGroupClientRelationship2?: shared.UpdateSystemModelsUpdateGroupClientRelationship;
}
export declare class UpdateGroupClientRelationshipsPostSubscriptionRequest extends SpeakeasyBase {
    request: UpdateGroupClientRelationshipsPostSubscriptionRequests;
}
export declare class UpdateGroupClientRelationshipsPostSubscriptionResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    updateGroupClientRelationshipsPostSubscription200ApplicationJsonString?: string;
    updateGroupClientRelationshipsPostSubscription200ApplicationXmlString?: string;
    updateGroupClientRelationshipsPostSubscription200TextJsonString?: string;
    updateGroupClientRelationshipsPostSubscription200TextXmlString?: string;
}
