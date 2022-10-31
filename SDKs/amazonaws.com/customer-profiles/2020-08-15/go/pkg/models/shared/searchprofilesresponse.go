package shared

type SearchProfilesResponse struct {
	Items     []Profile `json:"Items,omitempty"`
	NextToken *string   `json:"NextToken,omitempty"`
}
