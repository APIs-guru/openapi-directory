import { SpeakeasyBase } from "../../../internal/utils/utils";
import { LanguageCodeEnum } from "./languagecodeenum";
export declare class DetectSentimentRequest extends SpeakeasyBase {
    languageCode: LanguageCodeEnum;
    text: string;
}
