package shared

// Model
// Represents a data model for an API. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/models-mappings.html">Create Models and Mapping Templates for Request and Response Mappings</a>.
type Model struct {
	ContentType *string `json:"ContentType,omitempty"`
	Description *string `json:"Description,omitempty"`
	ModelID     *string `json:"ModelId,omitempty"`
	Name        string  `json:"Name"`
	Schema      *string `json:"Schema,omitempty"`
}
