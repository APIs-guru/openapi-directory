import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateGroupClientRelationshipsPutSubscriptionByClientIdUpdateGroupIdQueryParams extends SpeakeasyBase {
    active: boolean;
    clientId: string;
    updateGroupId: string;
}
export declare class UpdateGroupClientRelationshipsPutSubscriptionByClientIdUpdateGroupIdRequest extends SpeakeasyBase {
    queryParams: UpdateGroupClientRelationshipsPutSubscriptionByClientIdUpdateGroupIdQueryParams;
}
export declare class UpdateGroupClientRelationshipsPutSubscriptionByClientIdUpdateGroupIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
