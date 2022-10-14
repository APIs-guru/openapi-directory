package shared

type DescribeSubnetGroupsRequest struct {
	MaxResults       *int64   `json:"MaxResults,omitempty"`
	NextToken        *string  `json:"NextToken,omitempty"`
	SubnetGroupNames []string `json:"SubnetGroupNames,omitempty"`
}
