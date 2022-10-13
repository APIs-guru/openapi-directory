package shared

type AssetModelCompositeModelDefinition struct {
	Description *string      `json:"description"`
	Name        string       `json:"name"`
	Properties  *interface{} `json:"properties"`
	Type        string       `json:"type"`
}
