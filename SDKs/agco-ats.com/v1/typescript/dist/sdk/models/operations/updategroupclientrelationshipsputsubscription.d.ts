import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateGroupClientRelationshipsPutSubscriptionPathParams extends SpeakeasyBase {
    relationshipId: string;
}
export declare class UpdateGroupClientRelationshipsPutSubscriptionRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    textXml: Uint8Array;
    updateSystemModelsUpdateGroupClientRelationship?: shared.UpdateSystemModelsUpdateGroupClientRelationship;
    updateSystemModelsUpdateGroupClientRelationship1?: shared.UpdateSystemModelsUpdateGroupClientRelationship;
    updateSystemModelsUpdateGroupClientRelationship2?: shared.UpdateSystemModelsUpdateGroupClientRelationship;
}
export declare class UpdateGroupClientRelationshipsPutSubscriptionRequest extends SpeakeasyBase {
    pathParams: UpdateGroupClientRelationshipsPutSubscriptionPathParams;
    request: UpdateGroupClientRelationshipsPutSubscriptionRequests;
}
export declare class UpdateGroupClientRelationshipsPutSubscriptionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
