import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReportingRegisteredClientsQueryParams extends SpeakeasyBase {
    clientId?: string;
    lastCheckInAfter?: Date;
    lastCheckInBefore?: Date;
    orderBy?: string;
    reportResult?: string;
    reportResultIsValid?: boolean;
    reportValue?: string;
    tag?: string;
    updateGroupId?: string;
    limit?: number;
    offset?: number;
}
export declare class ReportingRegisteredClientsRequest extends SpeakeasyBase {
    queryParams: ReportingRegisteredClientsQueryParams;
}
export declare class ReportingRegisteredClientsResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    apiPagedResponseUpdateSystemModelsClientStatusUpdateSystemModelsPagedClientStatusMetadata?: shared.ApiPagedResponseUpdateSystemModelsClientStatusUpdateSystemModelsPagedClientStatusMetadata;
    contentType: string;
    statusCode: number;
}
