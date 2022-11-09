import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DominantLanguage } from "./dominantlanguage";


export class DetectDominantLanguageResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Languages", elemType: shared.DominantLanguage })
  languages?: DominantLanguage[];
}
