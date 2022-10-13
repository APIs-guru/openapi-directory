package shared

type SuggestionMatch struct {
	ID         *string `json:"id"`
	Score      *int64  `json:"score"`
	Suggestion *string `json:"suggestion"`
}
