import { SpeakeasyBase } from "../../../internal/utils";
import { AlgorithmicStemmingEnum } from "./algorithmicstemmingenum";
/**
 * Synonyms, stopwords, and stemming options for an analysis scheme. Includes tokenization dictionary for Japanese.
**/
export declare class AnalysisOptions extends SpeakeasyBase {
    algorithmicStemming?: AlgorithmicStemmingEnum;
    japaneseTokenizationDictionary?: string;
    stemmingDictionary?: string;
    stopwords?: string;
    synonyms?: string;
}
