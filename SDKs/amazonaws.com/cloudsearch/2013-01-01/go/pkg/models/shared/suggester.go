package shared

// Suggester
// Configuration information for a search suggester. Each suggester has a unique name and specifies the text field you want to use for suggestions. The following options can be configured for a suggester: <code>FuzzyMatching</code>, <code>SortExpression</code>.
type Suggester struct {
	DocumentSuggesterOptions DocumentSuggesterOptions
	SuggesterName            string
}
