import { SpeakeasyBase } from "../../../internal/utils";
export declare class AuthorizationCodeDefinitionsAddCategoryToDefinitionPathParams extends SpeakeasyBase {
    id: string;
    categoryId: string;
}
export declare class AuthorizationCodeDefinitionsAddCategoryToDefinitionRequest extends SpeakeasyBase {
    pathParams: AuthorizationCodeDefinitionsAddCategoryToDefinitionPathParams;
}
export declare class AuthorizationCodeDefinitionsAddCategoryToDefinitionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
