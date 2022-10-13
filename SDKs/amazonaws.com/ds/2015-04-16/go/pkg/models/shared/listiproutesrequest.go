package shared

type ListIPRoutesRequest struct {
	DirectoryID string  `json:"DirectoryId"`
	Limit       *int64  `json:"Limit"`
	NextToken   *string `json:"NextToken"`
}
