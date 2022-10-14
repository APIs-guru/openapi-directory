package shared

type CreateAliasInput struct {
	Description     *string         `json:"Description,omitempty"`
	Name            string          `json:"Name"`
	RoutingStrategy RoutingStrategy `json:"RoutingStrategy"`
	Tags            []Tag           `json:"Tags,omitempty"`
}
