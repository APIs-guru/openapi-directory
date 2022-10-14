package shared

type ListInstanceFleetsOutput struct {
	InstanceFleets []InstanceFleet `json:"InstanceFleets,omitempty"`
	Marker         *string         `json:"Marker,omitempty"`
}
