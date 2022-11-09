import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LanguageCodeEnum } from "./languagecodeenum";


export class BatchDetectSentimentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=LanguageCode" })
  languageCode: LanguageCodeEnum;

  @Metadata({ data: "json, name=TextList" })
  textList: string[];
}
