package shared

type DescribeSharedDirectoriesRequest struct {
	Limit              *int64   `json:"Limit,omitempty"`
	NextToken          *string  `json:"NextToken,omitempty"`
	OwnerDirectoryID   string   `json:"OwnerDirectoryId"`
	SharedDirectoryIds []string `json:"SharedDirectoryIds,omitempty"`
}
