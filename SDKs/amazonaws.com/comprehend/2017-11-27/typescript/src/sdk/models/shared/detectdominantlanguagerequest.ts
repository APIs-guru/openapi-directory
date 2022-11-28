import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DetectDominantLanguageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Text" })
  text: string;
}
