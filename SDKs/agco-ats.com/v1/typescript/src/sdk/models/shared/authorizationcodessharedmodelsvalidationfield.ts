import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AuthorizationCodesSharedModelsValidationFieldTypeEnum {
    Boolean = "Boolean",
    Float = "Float",
    Int = "Int",
    StringCaseInsensitive = "StringCaseInsensitive",
    StringCaseSensitive = "StringCaseSensitive"
}


export class AuthorizationCodesSharedModelsValidationField extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: AuthorizationCodesSharedModelsValidationFieldTypeEnum;
}
