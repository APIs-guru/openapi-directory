package shared

type GetApisResponse struct {
	Items     []API   `json:"Items"`
	NextToken *string `json:"NextToken"`
}
