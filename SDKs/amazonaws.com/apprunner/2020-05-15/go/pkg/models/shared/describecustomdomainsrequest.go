package shared

type DescribeCustomDomainsRequest struct {
	MaxResults *int64  `json:"MaxResults"`
	NextToken  *string `json:"NextToken"`
	ServiceArn string  `json:"ServiceArn"`
}
