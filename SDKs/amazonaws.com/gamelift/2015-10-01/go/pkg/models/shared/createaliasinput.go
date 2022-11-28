package shared

// CreateAliasInput
// Represents the input for a request operation.
type CreateAliasInput struct {
	Description     *string         `json:"Description,omitempty"`
	Name            string          `json:"Name"`
	RoutingStrategy RoutingStrategy `json:"RoutingStrategy"`
	Tags            []Tag           `json:"Tags,omitempty"`
}
