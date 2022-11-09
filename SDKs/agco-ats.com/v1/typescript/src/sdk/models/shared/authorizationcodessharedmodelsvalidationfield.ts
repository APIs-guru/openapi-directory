import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AuthorizationCodesSharedModelsValidationFieldTypeEnum {
    Boolean = "Boolean"
,    Float = "Float"
,    Int = "Int"
,    StringCaseInsensitive = "StringCaseInsensitive"
,    StringCaseSensitive = "StringCaseSensitive"
}


export class AuthorizationCodesSharedModelsValidationField extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Type" })
  type: AuthorizationCodesSharedModelsValidationFieldTypeEnum;
}
