import { SpeakeasyBase } from "../../../internal/utils";
import { LanguageCodeEnum } from "./languagecodeenum";
export declare class DetectKeyPhrasesRequest extends SpeakeasyBase {
    languageCode: LanguageCodeEnum;
    text: string;
}
