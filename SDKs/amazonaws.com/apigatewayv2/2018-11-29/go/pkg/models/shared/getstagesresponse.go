package shared

type GetStagesResponse struct {
	Items     []Stage `json:"Items"`
	NextToken *string `json:"NextToken"`
}
