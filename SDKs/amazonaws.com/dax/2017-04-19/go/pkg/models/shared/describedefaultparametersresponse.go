package shared

type DescribeDefaultParametersResponse struct {
	NextToken  *string     `json:"NextToken"`
	Parameters []Parameter `json:"Parameters"`
}
