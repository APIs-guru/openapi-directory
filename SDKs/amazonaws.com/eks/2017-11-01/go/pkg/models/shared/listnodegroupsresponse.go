package shared

type ListNodegroupsResponse struct {
	NextToken  *string  `json:"nextToken"`
	Nodegroups []string `json:"nodegroups"`
}
