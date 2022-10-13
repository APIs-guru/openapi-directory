package shared

type GetAPIMappingsResponse struct {
	Items     []APIMapping `json:"Items"`
	NextToken *string      `json:"NextToken"`
}
