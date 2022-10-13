package shared

type ListGraphsResponse struct {
	GraphList []Graph `json:"GraphList"`
	NextToken *string `json:"NextToken"`
}
