package shared

type DescribeFileSystemAliasesRequest struct {
	ClientRequestToken *string `json:"ClientRequestToken"`
	FileSystemID       string  `json:"FileSystemId"`
	MaxResults         *int64  `json:"MaxResults"`
	NextToken          *string `json:"NextToken"`
}
