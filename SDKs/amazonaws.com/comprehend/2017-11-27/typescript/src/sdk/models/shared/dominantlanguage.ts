import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DominantLanguage
/** 
 * Returns the code for the dominant language in the input text and the level of confidence that Amazon Comprehend has in the accuracy of the detection.
**/
export class DominantLanguage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LanguageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=Score" })
  score?: number;
}
