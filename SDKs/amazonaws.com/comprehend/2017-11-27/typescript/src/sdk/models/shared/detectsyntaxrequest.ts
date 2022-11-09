import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SyntaxLanguageCodeEnum } from "./syntaxlanguagecodeenum";


export class DetectSyntaxRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=LanguageCode" })
  languageCode: SyntaxLanguageCodeEnum;

  @Metadata({ data: "json, name=Text" })
  text: string;
}
