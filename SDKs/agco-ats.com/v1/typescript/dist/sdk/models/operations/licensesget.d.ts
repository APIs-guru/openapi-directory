import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum LicensesGetStatusEnum {
    Active = "Active",
    Inactive = "Inactive",
    All = "All"
}
export declare class LicensesGetQueryParams extends SpeakeasyBase {
    dealerCode?: string;
    status?: LicensesGetStatusEnum;
    voucherCode?: string;
    limit?: number;
    offset?: number;
}
export declare class LicensesGetRequest extends SpeakeasyBase {
    queryParams: LicensesGetQueryParams;
}
export declare class LicensesGetResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    apiPagedResponseDealerDbModelsLicense?: shared.ApiPagedResponseDealerDbModelsLicense;
    contentType: string;
    statusCode: number;
}
