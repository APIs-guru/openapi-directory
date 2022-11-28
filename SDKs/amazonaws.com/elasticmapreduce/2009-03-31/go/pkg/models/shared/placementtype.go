package shared

// PlacementType
// The Amazon EC2 Availability Zone configuration of the cluster (job flow).
type PlacementType struct {
	AvailabilityZone  *string  `json:"AvailabilityZone,omitempty"`
	AvailabilityZones []string `json:"AvailabilityZones,omitempty"`
}
