package shared

type ListArchivesResponse struct {
	Archives  []Archive `json:"Archives,omitempty"`
	NextToken *string   `json:"NextToken,omitempty"`
}
