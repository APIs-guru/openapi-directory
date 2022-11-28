import { SpeakeasyBase } from "../../../internal/utils";
import { LanguageCodeEnum } from "./languagecodeenum";
export declare class BatchDetectSentimentRequest extends SpeakeasyBase {
    languageCode: LanguageCodeEnum;
    textList: string[];
}
