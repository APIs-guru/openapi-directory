package shared

// Route
// Describes a route in a route table.
type Route struct {
	Destination     *string              `json:"Destination,omitempty"`
	DestinationType *DestinationTypeEnum `json:"DestinationType,omitempty"`
	Target          *string              `json:"Target,omitempty"`
	TargetType      *TargetTypeEnum      `json:"TargetType,omitempty"`
}
