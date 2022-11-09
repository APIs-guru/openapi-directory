import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SyntaxLanguageCodeEnum } from "./syntaxlanguagecodeenum";


export class BatchDetectSyntaxRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=LanguageCode" })
  languageCode: SyntaxLanguageCodeEnum;

  @Metadata({ data: "json, name=TextList" })
  textList: string[];
}
