package shared

type DescribeSharedDirectoriesRequest struct {
	Limit              *int64   `json:"Limit"`
	NextToken          *string  `json:"NextToken"`
	OwnerDirectoryID   string   `json:"OwnerDirectoryId"`
	SharedDirectoryIds []string `json:"SharedDirectoryIds"`
}
