package shared

type BatchGetBlueprintsResponse struct {
	Blueprints        []Blueprint `json:"Blueprints"`
	MissingBlueprints []string    `json:"MissingBlueprints"`
}
