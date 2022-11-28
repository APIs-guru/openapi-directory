package shared

// AnalysisScheme
// Configuration information for an analysis scheme. Each analysis scheme has a unique name and specifies the language of the text to be processed. The following options can be configured for an analysis scheme: <code>Synonyms</code>, <code>Stopwords</code>, <code>StemmingDictionary</code>, <code>JapaneseTokenizationDictionary</code> and <code>AlgorithmicStemming</code>.
type AnalysisScheme struct {
	AnalysisOptions        *AnalysisOptions
	AnalysisSchemeLanguage AnalysisSchemeLanguageEnum
	AnalysisSchemeName     string
}
