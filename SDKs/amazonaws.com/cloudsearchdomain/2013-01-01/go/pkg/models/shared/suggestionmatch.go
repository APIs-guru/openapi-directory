package shared

// SuggestionMatch
// An autocomplete suggestion that matches the query string specified in a <code>SuggestRequest</code>.
type SuggestionMatch struct {
	ID         *string `json:"id,omitempty"`
	Score      *int64  `json:"score,omitempty"`
	Suggestion *string `json:"suggestion,omitempty"`
}
