package shared

type ListBlueprintsResponse struct {
	Blueprints []string `json:"Blueprints"`
	NextToken  *string  `json:"NextToken"`
}
