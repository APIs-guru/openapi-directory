import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiV2AuthorizationCodeDefinitionsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetApiV2AuthorizationCodeDefinitionsIdRequest extends SpeakeasyBase {
    pathParams: GetApiV2AuthorizationCodeDefinitionsIdPathParams;
}
export declare class GetApiV2AuthorizationCodeDefinitionsIdResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    authorizationCodesSharedModelsAuthorizationCodeDefinition?: shared.AuthorizationCodesSharedModelsAuthorizationCodeDefinition;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
