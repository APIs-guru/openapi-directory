import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LanguageCodeEnum } from "./languagecodeenum";


export class DetectEntitiesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndpointArn" })
  endpointArn?: string;

  @Metadata({ data: "json, name=LanguageCode" })
  languageCode?: LanguageCodeEnum;

  @Metadata({ data: "json, name=Text" })
  text: string;
}
