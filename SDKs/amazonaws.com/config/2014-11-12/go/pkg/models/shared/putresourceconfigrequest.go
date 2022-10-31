package shared

type PutResourceConfigRequest struct {
	Configuration   string            `json:"Configuration"`
	ResourceID      string            `json:"ResourceId"`
	ResourceName    *string           `json:"ResourceName,omitempty"`
	ResourceType    string            `json:"ResourceType"`
	SchemaVersionID string            `json:"SchemaVersionId"`
	Tags            map[string]string `json:"Tags,omitempty"`
}
