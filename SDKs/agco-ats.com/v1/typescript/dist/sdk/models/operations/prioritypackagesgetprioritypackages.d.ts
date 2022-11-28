import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PriorityPackagesGetPriorityPackagesStatusEnum {
    Active = "Active",
    Completed = "Completed",
    All = "All"
}
export declare class PriorityPackagesGetPriorityPackagesQueryParams extends SpeakeasyBase {
    clientId?: string;
    status?: PriorityPackagesGetPriorityPackagesStatusEnum;
    limit?: number;
    offset?: number;
}
export declare class PriorityPackagesGetPriorityPackagesRequest extends SpeakeasyBase {
    queryParams: PriorityPackagesGetPriorityPackagesQueryParams;
}
export declare class PriorityPackagesGetPriorityPackagesResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    apiPagedResponseUpdateSystemModelsPriorityPackage?: shared.ApiPagedResponseUpdateSystemModelsPriorityPackage;
    contentType: string;
    statusCode: number;
}
