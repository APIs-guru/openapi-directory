import { SpeakeasyBase } from "../../../internal/utils";
import { LanguageCodeEnum } from "./languagecodeenum";
export declare class BatchDetectEntitiesRequest extends SpeakeasyBase {
    languageCode: LanguageCodeEnum;
    textList: string[];
}
