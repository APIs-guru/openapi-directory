package shared

type UpdateAliasInput struct {
	AliasID         string           `json:"AliasId"`
	Description     *string          `json:"Description"`
	Name            *string          `json:"Name"`
	RoutingStrategy *RoutingStrategy `json:"RoutingStrategy"`
}
