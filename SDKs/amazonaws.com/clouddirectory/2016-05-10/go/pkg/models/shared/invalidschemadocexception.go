package shared

// InvalidSchemaDocException
// Indicates that the provided <code>SchemaDoc</code> value is not valid.
type InvalidSchemaDocException struct {
	Message *string `json:"Message,omitempty"`
}
