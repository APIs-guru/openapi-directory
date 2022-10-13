package shared

type ListTestGridProjectsRequest struct {
	MaxResult *int64  `json:"maxResult"`
	NextToken *string `json:"nextToken"`
}
