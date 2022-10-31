package shared

type GetDatabasesResponse struct {
	DatabaseList []Database `json:"DatabaseList"`
	NextToken    *string    `json:"NextToken,omitempty"`
}
