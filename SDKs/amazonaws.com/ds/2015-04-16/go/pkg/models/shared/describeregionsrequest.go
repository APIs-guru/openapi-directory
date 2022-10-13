package shared

type DescribeRegionsRequest struct {
	DirectoryID string  `json:"DirectoryId"`
	NextToken   *string `json:"NextToken"`
	RegionName  *string `json:"RegionName"`
}
