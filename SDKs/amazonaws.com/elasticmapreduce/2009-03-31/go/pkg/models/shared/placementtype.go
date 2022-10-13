package shared

type PlacementType struct {
	AvailabilityZone  *string  `json:"AvailabilityZone"`
	AvailabilityZones []string `json:"AvailabilityZones"`
}
