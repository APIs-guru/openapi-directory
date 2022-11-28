package shared

// DeleteSuggesterResponse
// The result of a <code>DeleteSuggester</code> request. Contains the status of the deleted suggester.
type DeleteSuggesterResponse struct {
	Suggester SuggesterStatus
}
