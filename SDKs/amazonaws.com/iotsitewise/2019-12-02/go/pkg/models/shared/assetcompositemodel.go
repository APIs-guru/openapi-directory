package shared

type AssetCompositeModel struct {
	Description *string     `json:"description,omitempty"`
	Name        string      `json:"name"`
	Properties  interface{} `json:"properties"`
	Type        string      `json:"type"`
}
