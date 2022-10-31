package shared

type UpdateAliasInput struct {
	AliasID         string           `json:"AliasId"`
	Description     *string          `json:"Description,omitempty"`
	Name            *string          `json:"Name,omitempty"`
	RoutingStrategy *RoutingStrategy `json:"RoutingStrategy,omitempty"`
}
