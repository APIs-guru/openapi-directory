package shared

// DefineSuggesterResponse
// The result of a <code>DefineSuggester</code> request. Contains the status of the newly-configured suggester.
type DefineSuggesterResponse struct {
	Suggester SuggesterStatus
}
