package shared

type DescribeSubnetGroupsRequest struct {
	MaxResults       *int64   `json:"MaxResults"`
	NextToken        *string  `json:"NextToken"`
	SubnetGroupNames []string `json:"SubnetGroupNames"`
}
