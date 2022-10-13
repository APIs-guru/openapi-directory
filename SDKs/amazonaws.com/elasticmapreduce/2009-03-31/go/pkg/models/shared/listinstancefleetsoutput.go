package shared

type ListInstanceFleetsOutput struct {
	InstanceFleets []InstanceFleet `json:"InstanceFleets"`
	Marker         *string         `json:"Marker"`
}
