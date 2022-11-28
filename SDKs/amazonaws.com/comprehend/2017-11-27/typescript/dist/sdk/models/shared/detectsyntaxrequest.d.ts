import { SpeakeasyBase } from "../../../internal/utils";
import { SyntaxLanguageCodeEnum } from "./syntaxlanguagecodeenum";
export declare class DetectSyntaxRequest extends SpeakeasyBase {
    languageCode: SyntaxLanguageCodeEnum;
    text: string;
}
