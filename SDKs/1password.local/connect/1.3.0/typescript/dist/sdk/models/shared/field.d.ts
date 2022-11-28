import { SpeakeasyBase } from "../../../internal/utils";
import { GeneratorRecipe } from "./generatorrecipe";
export declare enum FieldPurposeEnum {
    Unknown = "",
    Username = "USERNAME",
    Password = "PASSWORD",
    Notes = "NOTES"
}
export declare class FieldSection extends SpeakeasyBase {
    id?: string;
}
export declare enum FieldTypeEnum {
    String = "STRING",
    Email = "EMAIL",
    Concealed = "CONCEALED",
    Url = "URL",
    Totp = "TOTP",
    Date = "DATE",
    MonthYear = "MONTH_YEAR",
    Menu = "MENU"
}
export declare class Field extends SpeakeasyBase {
    entropy?: number;
    generate?: boolean;
    id: string;
    label?: string;
    purpose?: FieldPurposeEnum;
    recipe?: GeneratorRecipe;
    section?: FieldSection;
    type: FieldTypeEnum;
    value?: string;
}
export declare class FieldInput extends SpeakeasyBase {
    generate?: boolean;
    id: string;
    label?: string;
    purpose?: FieldPurposeEnum;
    recipe?: GeneratorRecipe;
    section?: FieldSection;
    type: FieldTypeEnum;
    value?: string;
}
