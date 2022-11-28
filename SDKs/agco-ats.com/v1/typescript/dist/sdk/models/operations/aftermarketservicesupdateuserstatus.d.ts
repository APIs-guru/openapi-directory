import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AftermarketServicesUpdateUserStatusRequests extends SpeakeasyBase {
    agcoPowerServicesModelsUserStatus?: shared.AgcoPowerServicesModelsUserStatus;
    agcoPowerServicesModelsUserStatus1?: shared.AgcoPowerServicesModelsUserStatus;
    agcoPowerServicesModelsUserStatus2?: shared.AgcoPowerServicesModelsUserStatus;
    applicationXml: Uint8Array;
    textXml: Uint8Array;
}
export declare class AftermarketServicesUpdateUserStatusRequest extends SpeakeasyBase {
    request: AftermarketServicesUpdateUserStatusRequests;
}
export declare class AftermarketServicesUpdateUserStatusResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    aftermarketServicesUpdateUserStatus200ApplicationJsonBoolean?: boolean;
    aftermarketServicesUpdateUserStatus200TextJsonBoolean?: boolean;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
