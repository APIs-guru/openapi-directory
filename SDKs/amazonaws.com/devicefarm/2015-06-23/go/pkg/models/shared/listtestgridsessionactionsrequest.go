package shared

type ListTestGridSessionActionsRequest struct {
	MaxResult  *int64  `json:"maxResult"`
	NextToken  *string `json:"nextToken"`
	SessionArn string  `json:"sessionArn"`
}
