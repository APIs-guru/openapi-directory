import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReportingUpdateGroupsQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
}
export declare class ReportingUpdateGroupsRequest extends SpeakeasyBase {
    queryParams: ReportingUpdateGroupsQueryParams;
}
export declare class ReportingUpdateGroupsResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    apiPagedResponseUpdateSystemModelsUpdateGroup?: shared.ApiPagedResponseUpdateSystemModelsUpdateGroup;
    contentType: string;
    statusCode: number;
}
