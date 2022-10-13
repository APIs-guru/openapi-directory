package shared

type DescribeRepositoriesResponse struct {
	NextToken    *string      `json:"nextToken"`
	Repositories []Repository `json:"repositories"`
}
