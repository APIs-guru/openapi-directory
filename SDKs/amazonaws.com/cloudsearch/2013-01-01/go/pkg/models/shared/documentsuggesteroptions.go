package shared

// DocumentSuggesterOptions
// Options for a search suggester.
type DocumentSuggesterOptions struct {
	FuzzyMatching  *SuggesterFuzzyMatchingEnum
	SortExpression *string
	SourceField    string
}
