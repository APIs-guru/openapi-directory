import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DetectDominantLanguageRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Text" })
  text: string;
}
