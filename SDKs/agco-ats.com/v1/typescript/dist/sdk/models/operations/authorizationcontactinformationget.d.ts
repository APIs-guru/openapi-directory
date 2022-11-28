import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AuthorizationContactInformationGetQueryParams extends SpeakeasyBase {
    afterDate?: Date;
    authorizationCode?: string;
    beforeDate?: Date;
    dealerCode?: string;
    limit?: number;
    offset?: number;
}
export declare class AuthorizationContactInformationGetRequest extends SpeakeasyBase {
    queryParams: AuthorizationContactInformationGetQueryParams;
}
export declare class AuthorizationContactInformationGetResponse extends SpeakeasyBase {
    apiIPagedResponseAuthorizationCodesSharedModelsAuthorizationContactInformation?: shared.ApiIPagedResponseAuthorizationCodesSharedModelsAuthorizationContactInformation;
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
