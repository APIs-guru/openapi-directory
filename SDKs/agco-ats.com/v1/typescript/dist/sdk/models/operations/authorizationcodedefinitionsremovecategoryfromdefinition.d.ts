import { SpeakeasyBase } from "../../../internal/utils";
export declare class AuthorizationCodeDefinitionsRemoveCategoryFromDefinitionPathParams extends SpeakeasyBase {
    id: string;
    categoryId: string;
}
export declare class AuthorizationCodeDefinitionsRemoveCategoryFromDefinitionRequest extends SpeakeasyBase {
    pathParams: AuthorizationCodeDefinitionsRemoveCategoryFromDefinitionPathParams;
}
export declare class AuthorizationCodeDefinitionsRemoveCategoryFromDefinitionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
