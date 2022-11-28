import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SyntaxLanguageCodeEnum } from "./syntaxlanguagecodeenum";



export class BatchDetectSyntaxRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LanguageCode" })
  languageCode: SyntaxLanguageCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=TextList" })
  textList: string[];
}
