import { SpeakeasyBase } from "../../../internal/utils/utils";
import { LanguageCodeEnum } from "./languagecodeenum";
export declare class DetectEntitiesRequest extends SpeakeasyBase {
    endpointArn?: string;
    languageCode?: LanguageCodeEnum;
    text: string;
}
