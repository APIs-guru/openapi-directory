package shared

type GetStagesResponse struct {
	Items     []Stage `json:"Items,omitempty"`
	NextToken *string `json:"NextToken,omitempty"`
}
