package shared

type ListLogSubscriptionsRequest struct {
	DirectoryID *string `json:"DirectoryId,omitempty"`
	Limit       *int64  `json:"Limit,omitempty"`
	NextToken   *string `json:"NextToken,omitempty"`
}
