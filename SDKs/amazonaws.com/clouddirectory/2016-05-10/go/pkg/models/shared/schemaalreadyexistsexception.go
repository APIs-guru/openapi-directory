package shared

// SchemaAlreadyExistsException
// Indicates that a schema could not be created due to a naming conflict. Please select a different name and then try again.
type SchemaAlreadyExistsException struct {
	Message *string `json:"Message,omitempty"`
}
