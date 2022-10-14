package shared

type DescribeSharedDirectoriesResult struct {
	NextToken         *string           `json:"NextToken,omitempty"`
	SharedDirectories []SharedDirectory `json:"SharedDirectories,omitempty"`
}
