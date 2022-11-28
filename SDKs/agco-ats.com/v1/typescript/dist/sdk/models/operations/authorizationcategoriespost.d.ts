import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AuthorizationCategoriesPostRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    authorizationCodesSharedModelsCategory?: shared.AuthorizationCodesSharedModelsCategory;
    authorizationCodesSharedModelsCategory1?: shared.AuthorizationCodesSharedModelsCategory;
    authorizationCodesSharedModelsCategory2?: shared.AuthorizationCodesSharedModelsCategory;
    textXml: Uint8Array;
}
export declare class AuthorizationCategoriesPostRequest extends SpeakeasyBase {
    request: AuthorizationCategoriesPostRequests;
}
export declare class AuthorizationCategoriesPostResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    authorizationCategoriesPost200ApplicationJsonString?: string;
    authorizationCategoriesPost200ApplicationXmlString?: string;
    authorizationCategoriesPost200TextJsonString?: string;
    authorizationCategoriesPost200TextXmlString?: string;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
