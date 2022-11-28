import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AlgorithmicStemmingEnum } from "./algorithmicstemmingenum";



// AnalysisOptions
/** 
 * Synonyms, stopwords, and stemming options for an analysis scheme. Includes tokenization dictionary for Japanese.
**/
export class AnalysisOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  algorithmicStemming?: AlgorithmicStemmingEnum;

  @SpeakeasyMetadata()
  japaneseTokenizationDictionary?: string;

  @SpeakeasyMetadata()
  stemmingDictionary?: string;

  @SpeakeasyMetadata()
  stopwords?: string;

  @SpeakeasyMetadata()
  synonyms?: string;
}
