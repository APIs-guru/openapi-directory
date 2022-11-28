import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AuthorizationCodesSharedModelsValidationFieldTypeEnum {
    Boolean = "Boolean",
    Float = "Float",
    Int = "Int",
    StringCaseInsensitive = "StringCaseInsensitive",
    StringCaseSensitive = "StringCaseSensitive"
}
export declare class AuthorizationCodesSharedModelsValidationField extends SpeakeasyBase {
    name: string;
    type: AuthorizationCodesSharedModelsValidationFieldTypeEnum;
}
