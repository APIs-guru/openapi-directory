package shared

type DescribeResourceCollectionHealthResponse struct {
	CloudFormation []CloudFormationHealth `json:"CloudFormation"`
	NextToken      *string                `json:"NextToken"`
	Service        []ServiceHealth        `json:"Service"`
}
