package shared

// SuggestModel
// Container for the suggestion information returned in a <code>SuggestResponse</code>.
type SuggestModel struct {
	Found       *int64            `json:"found,omitempty"`
	Query       *string           `json:"query,omitempty"`
	Suggestions []SuggestionMatch `json:"suggestions,omitempty"`
}
