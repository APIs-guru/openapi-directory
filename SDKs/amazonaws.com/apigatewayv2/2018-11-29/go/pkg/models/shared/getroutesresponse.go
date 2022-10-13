package shared

type GetRoutesResponse struct {
	Items     []Route `json:"Items"`
	NextToken *string `json:"NextToken"`
}
