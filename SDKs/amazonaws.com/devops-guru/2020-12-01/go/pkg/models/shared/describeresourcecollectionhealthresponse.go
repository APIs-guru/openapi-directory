package shared

type DescribeResourceCollectionHealthResponse struct {
	CloudFormation []CloudFormationHealth `json:"CloudFormation"`
	NextToken      *string                `json:"NextToken,omitempty"`
	Service        []ServiceHealth        `json:"Service,omitempty"`
}
