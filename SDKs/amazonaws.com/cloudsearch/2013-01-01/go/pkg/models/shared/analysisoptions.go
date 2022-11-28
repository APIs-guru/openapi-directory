package shared

// AnalysisOptions
// Synonyms, stopwords, and stemming options for an analysis scheme. Includes tokenization dictionary for Japanese.
type AnalysisOptions struct {
	AlgorithmicStemming            *AlgorithmicStemmingEnum
	JapaneseTokenizationDictionary *string
	StemmingDictionary             *string
	Stopwords                      *string
	Synonyms                       *string
}
