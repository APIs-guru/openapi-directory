import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DealersGetDealersQueryParams extends SpeakeasyBase {
    brand?: string;
    dealerName?: string;
    shippingCountry?: string;
    limit?: number;
    offset?: number;
}
export declare class DealersGetDealersRequest extends SpeakeasyBase {
    queryParams: DealersGetDealersQueryParams;
}
export declare class DealersGetDealersResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    apiPagedResponseDealerDbModelsDealer?: shared.ApiPagedResponseDealerDbModelsDealer;
    contentType: string;
    statusCode: number;
}
