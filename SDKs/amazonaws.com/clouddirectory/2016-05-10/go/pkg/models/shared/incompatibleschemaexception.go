package shared

// IncompatibleSchemaException
// Indicates a failure occurred while performing a check for backward compatibility between the specified schema and the schema that is currently applied to the directory.
type IncompatibleSchemaException struct {
	Message *string `json:"Message,omitempty"`
}
