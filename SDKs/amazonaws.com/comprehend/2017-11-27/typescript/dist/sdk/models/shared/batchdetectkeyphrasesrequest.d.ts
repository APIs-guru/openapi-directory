import { SpeakeasyBase } from "../../../internal/utils";
import { LanguageCodeEnum } from "./languagecodeenum";
export declare class BatchDetectKeyPhrasesRequest extends SpeakeasyBase {
    languageCode: LanguageCodeEnum;
    textList: string[];
}
