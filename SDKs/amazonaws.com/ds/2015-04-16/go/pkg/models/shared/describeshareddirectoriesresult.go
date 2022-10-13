package shared

type DescribeSharedDirectoriesResult struct {
	NextToken         *string           `json:"NextToken"`
	SharedDirectories []SharedDirectory `json:"SharedDirectories"`
}
