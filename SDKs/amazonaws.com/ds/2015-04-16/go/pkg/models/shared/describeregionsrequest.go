package shared

type DescribeRegionsRequest struct {
	DirectoryID string  `json:"DirectoryId"`
	NextToken   *string `json:"NextToken,omitempty"`
	RegionName  *string `json:"RegionName,omitempty"`
}
