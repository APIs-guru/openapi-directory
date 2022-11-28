import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AftermarketServicesGetEngineIqaCodesPathParams extends SpeakeasyBase {
    serialNumber: string;
}
export declare class AftermarketServicesGetEngineIqaCodesQueryParams extends SpeakeasyBase {
    edtInstanceId: string;
}
export declare class AftermarketServicesGetEngineIqaCodesRequest extends SpeakeasyBase {
    pathParams: AftermarketServicesGetEngineIqaCodesPathParams;
    queryParams: AftermarketServicesGetEngineIqaCodesQueryParams;
}
export declare class AftermarketServicesGetEngineIqaCodesResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    aftermarketServicesGetEngineIqaCodes200ApplicationJsonStrings?: string[];
    aftermarketServicesGetEngineIqaCodes200TextJsonStrings?: string[];
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
