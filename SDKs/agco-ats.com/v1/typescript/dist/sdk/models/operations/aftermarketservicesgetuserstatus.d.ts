import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AftermarketServicesGetUserStatusQueryParams extends SpeakeasyBase {
    dealerCode: string;
    voucherCode: string;
}
export declare class AftermarketServicesGetUserStatusRequest extends SpeakeasyBase {
    queryParams: AftermarketServicesGetUserStatusQueryParams;
}
export declare class AftermarketServicesGetUserStatusResponse extends SpeakeasyBase {
    agcoPowerServicesModelsUserStatus?: shared.AgcoPowerServicesModelsUserStatus;
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
