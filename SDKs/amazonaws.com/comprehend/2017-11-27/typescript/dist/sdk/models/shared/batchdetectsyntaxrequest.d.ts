import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SyntaxLanguageCodeEnum } from "./syntaxlanguagecodeenum";
export declare class BatchDetectSyntaxRequest extends SpeakeasyBase {
    languageCode: SyntaxLanguageCodeEnum;
    textList: string[];
}
