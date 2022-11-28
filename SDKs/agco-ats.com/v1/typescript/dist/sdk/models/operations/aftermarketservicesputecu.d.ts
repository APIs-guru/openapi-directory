import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AftermarketServicesPutEcuPathParams extends SpeakeasyBase {
    serialNumber: string;
}
export declare class AftermarketServicesPutEcuQueryParams extends SpeakeasyBase {
    edtInstanceId: string;
}
export declare class AftermarketServicesPutEcuRequests extends SpeakeasyBase {
    agcoPowerServicesModelsEcu?: shared.AgcoPowerServicesModelsEcu;
    agcoPowerServicesModelsEcu1?: shared.AgcoPowerServicesModelsEcu;
    agcoPowerServicesModelsEcu2?: shared.AgcoPowerServicesModelsEcu;
    applicationXml: Uint8Array;
    textXml: Uint8Array;
}
export declare class AftermarketServicesPutEcuRequest extends SpeakeasyBase {
    pathParams: AftermarketServicesPutEcuPathParams;
    queryParams: AftermarketServicesPutEcuQueryParams;
    request: AftermarketServicesPutEcuRequests;
}
export declare class AftermarketServicesPutEcuResponse extends SpeakeasyBase {
    agcoPowerServicesModelsEcu?: shared.AgcoPowerServicesModelsEcu;
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
