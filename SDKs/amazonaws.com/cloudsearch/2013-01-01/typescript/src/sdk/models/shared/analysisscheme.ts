import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AnalysisOptions } from "./analysisoptions";
import { AnalysisSchemeLanguageEnum } from "./analysisschemelanguageenum";



// AnalysisScheme
/** 
 * Configuration information for an analysis scheme. Each analysis scheme has a unique name and specifies the language of the text to be processed. The following options can be configured for an analysis scheme: <code>Synonyms</code>, <code>Stopwords</code>, <code>StemmingDictionary</code>, <code>JapaneseTokenizationDictionary</code> and <code>AlgorithmicStemming</code>.
**/
export class AnalysisScheme extends SpeakeasyBase {
  @SpeakeasyMetadata()
  analysisOptions?: AnalysisOptions;

  @SpeakeasyMetadata()
  analysisSchemeLanguage: AnalysisSchemeLanguageEnum;

  @SpeakeasyMetadata()
  analysisSchemeName: string;
}
