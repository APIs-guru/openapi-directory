import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateGroupClientRelationshipsGetSubscriptionsQueryParams extends SpeakeasyBase {
    clientId?: string;
    updateGroupId?: string;
    limit?: number;
    offset?: number;
}
export declare class UpdateGroupClientRelationshipsGetSubscriptionsRequest extends SpeakeasyBase {
    queryParams: UpdateGroupClientRelationshipsGetSubscriptionsQueryParams;
}
export declare class UpdateGroupClientRelationshipsGetSubscriptionsResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    apiPagedResponseUpdateSystemModelsUpdateGroupClientRelationship?: shared.ApiPagedResponseUpdateSystemModelsUpdateGroupClientRelationship;
    contentType: string;
    statusCode: number;
}
