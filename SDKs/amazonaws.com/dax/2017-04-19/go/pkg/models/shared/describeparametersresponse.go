package shared

type DescribeParametersResponse struct {
	NextToken  *string     `json:"NextToken"`
	Parameters []Parameter `json:"Parameters"`
}
