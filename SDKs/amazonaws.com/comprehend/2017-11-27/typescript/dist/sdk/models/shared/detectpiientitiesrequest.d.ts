import { SpeakeasyBase } from "../../../internal/utils";
import { LanguageCodeEnum } from "./languagecodeenum";
export declare class DetectPiiEntitiesRequest extends SpeakeasyBase {
    languageCode: LanguageCodeEnum;
    text: string;
}
