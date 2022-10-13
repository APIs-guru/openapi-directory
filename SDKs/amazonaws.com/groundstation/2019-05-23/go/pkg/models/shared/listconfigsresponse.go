package shared

type ListConfigsResponse struct {
	ConfigList []ConfigListItem `json:"configList"`
	NextToken  *string          `json:"nextToken"`
}
