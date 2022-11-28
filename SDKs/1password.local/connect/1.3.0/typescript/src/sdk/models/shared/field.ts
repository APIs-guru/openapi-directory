import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GeneratorRecipe } from "./generatorrecipe";


export enum FieldPurposeEnum {
    Unknown = "",
    Username = "USERNAME",
    Password = "PASSWORD",
    Notes = "NOTES"
}


export class FieldSection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}

export enum FieldTypeEnum {
    String = "STRING",
    Email = "EMAIL",
    Concealed = "CONCEALED",
    Url = "URL",
    Totp = "TOTP",
    Date = "DATE",
    MonthYear = "MONTH_YEAR",
    Menu = "MENU"
}


export class Field extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entropy" })
  entropy?: number;

  @SpeakeasyMetadata({ data: "json, name=generate" })
  generate?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=purpose" })
  purpose?: FieldPurposeEnum;

  @SpeakeasyMetadata({ data: "json, name=recipe" })
  recipe?: GeneratorRecipe;

  @SpeakeasyMetadata({ data: "json, name=section" })
  section?: FieldSection;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: FieldTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class FieldInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=generate" })
  generate?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=purpose" })
  purpose?: FieldPurposeEnum;

  @SpeakeasyMetadata({ data: "json, name=recipe" })
  recipe?: GeneratorRecipe;

  @SpeakeasyMetadata({ data: "json, name=section" })
  section?: FieldSection;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: FieldTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
