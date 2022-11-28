import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReportingGetSubscriptionsQueryParams extends SpeakeasyBase {
    clientId?: string;
    updateGroupId?: string;
    limit?: number;
    offset?: number;
}
export declare class ReportingGetSubscriptionsRequest extends SpeakeasyBase {
    queryParams: ReportingGetSubscriptionsQueryParams;
}
export declare class ReportingGetSubscriptionsResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    apiPagedResponseUpdateSystemModelsUpdateGroupClientRelationship?: shared.ApiPagedResponseUpdateSystemModelsUpdateGroupClientRelationship;
    contentType: string;
    statusCode: number;
}
