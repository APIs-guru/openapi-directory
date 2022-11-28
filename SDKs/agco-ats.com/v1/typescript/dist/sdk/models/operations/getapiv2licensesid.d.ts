import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiV2LicensesIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetApiV2LicensesIdRequest extends SpeakeasyBase {
    pathParams: GetApiV2LicensesIdPathParams;
}
export declare class GetApiV2LicensesIdResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    dealerDbModelsLicense?: shared.DealerDbModelsLicense;
    statusCode: number;
}
