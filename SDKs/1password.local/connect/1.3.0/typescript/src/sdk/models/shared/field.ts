import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GeneratorRecipe } from "./generatorrecipe";

export enum FieldPurposeEnum {
    Unknown = ""
,    Username = "USERNAME"
,    Password = "PASSWORD"
,    Notes = "NOTES"
}


export class FieldSection extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;
}

export enum FieldTypeEnum {
    String = "STRING"
,    Email = "EMAIL"
,    Concealed = "CONCEALED"
,    Url = "URL"
,    Totp = "TOTP"
,    Date = "DATE"
,    MonthYear = "MONTH_YEAR"
,    Menu = "MENU"
}


export class Field extends SpeakeasyBase {
  @Metadata({ data: "json, name=entropy" })
  entropy?: number;

  @Metadata({ data: "json, name=generate" })
  generate?: boolean;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=purpose" })
  purpose?: FieldPurposeEnum;

  @Metadata({ data: "json, name=recipe" })
  recipe?: GeneratorRecipe;

  @Metadata({ data: "json, name=section" })
  section?: FieldSection;

  @Metadata({ data: "json, name=type" })
  type: FieldTypeEnum;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
