package shared

type SearchProfilesResponse struct {
	Items     []Profile `json:"Items"`
	NextToken *string   `json:"NextToken"`
}
