package shared



type SuggestModel struct {
    Found *int64 `json:"found,omitempty"`
    Query *string `json:"query,omitempty"`
    Suggestions []SuggestionMatch `json:"suggestions,omitempty"`
    
}

