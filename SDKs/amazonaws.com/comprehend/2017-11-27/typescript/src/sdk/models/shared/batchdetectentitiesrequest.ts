import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LanguageCodeEnum } from "./languagecodeenum";



export class BatchDetectEntitiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LanguageCode" })
  languageCode: LanguageCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=TextList" })
  textList: string[];
}
