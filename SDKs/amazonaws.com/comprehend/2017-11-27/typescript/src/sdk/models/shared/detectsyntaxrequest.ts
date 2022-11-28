import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SyntaxLanguageCodeEnum } from "./syntaxlanguagecodeenum";



export class DetectSyntaxRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LanguageCode" })
  languageCode: SyntaxLanguageCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=Text" })
  text: string;
}
