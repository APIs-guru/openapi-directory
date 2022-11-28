package shared

// UpdateAliasInput
// Represents the input for a request operation.
type UpdateAliasInput struct {
	AliasID         string           `json:"AliasId"`
	Description     *string          `json:"Description,omitempty"`
	Name            *string          `json:"Name,omitempty"`
	RoutingStrategy *RoutingStrategy `json:"RoutingStrategy,omitempty"`
}
