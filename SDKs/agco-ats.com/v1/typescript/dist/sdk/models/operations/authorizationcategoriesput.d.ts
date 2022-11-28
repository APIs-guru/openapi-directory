import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AuthorizationCategoriesPutPathParams extends SpeakeasyBase {
    id: string;
}
export declare class AuthorizationCategoriesPutRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    authorizationCodesSharedModelsCategory?: shared.AuthorizationCodesSharedModelsCategory;
    authorizationCodesSharedModelsCategory1?: shared.AuthorizationCodesSharedModelsCategory;
    authorizationCodesSharedModelsCategory2?: shared.AuthorizationCodesSharedModelsCategory;
    textXml: Uint8Array;
}
export declare class AuthorizationCategoriesPutRequest extends SpeakeasyBase {
    pathParams: AuthorizationCategoriesPutPathParams;
    request: AuthorizationCategoriesPutRequests;
}
export declare class AuthorizationCategoriesPutResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
