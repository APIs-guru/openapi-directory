package shared

type SuggestionMatch struct {
	ID         *string `json:"id,omitempty"`
	Score      *int64  `json:"score,omitempty"`
	Suggestion *string `json:"suggestion,omitempty"`
}
