package shared

type ListTestGridProjectsRequest struct {
	MaxResult *int64  `json:"maxResult,omitempty"`
	NextToken *string `json:"nextToken,omitempty"`
}
