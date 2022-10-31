package shared

type BatchGetBlueprintsResponse struct {
	Blueprints        []Blueprint `json:"Blueprints,omitempty"`
	MissingBlueprints []string    `json:"MissingBlueprints,omitempty"`
}
