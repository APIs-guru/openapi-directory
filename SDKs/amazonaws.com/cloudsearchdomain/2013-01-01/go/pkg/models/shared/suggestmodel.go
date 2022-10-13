package shared

type SuggestModel struct {
	Found       *int64            `json:"found"`
	Query       *string           `json:"query"`
	Suggestions []SuggestionMatch `json:"suggestions"`
}
