import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DominantLanguage } from "./dominantlanguage";



export class DetectDominantLanguageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Languages", elemType: DominantLanguage })
  languages?: DominantLanguage[];
}
