package shared

type ListArchivesResponse struct {
	Archives  []Archive `json:"Archives"`
	NextToken *string   `json:"NextToken"`
}
