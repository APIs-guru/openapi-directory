import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AftermarketServicesGetProductionDataPathParams extends SpeakeasyBase {
    serialNumber: string;
}
export declare class AftermarketServicesGetProductionDataQueryParams extends SpeakeasyBase {
    edtInstanceId: string;
}
export declare class AftermarketServicesGetProductionDataRequest extends SpeakeasyBase {
    pathParams: AftermarketServicesGetProductionDataPathParams;
    queryParams: AftermarketServicesGetProductionDataQueryParams;
}
export declare class AftermarketServicesGetProductionDataResponse extends SpeakeasyBase {
    agcoPowerServicesModelsProductionData?: shared.AgcoPowerServicesModelsProductionData[];
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
