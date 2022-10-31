package shared



type PlacementType struct {
    AvailabilityZone *string `json:"AvailabilityZone,omitempty"`
    AvailabilityZones []string `json:"AvailabilityZones,omitempty"`
    
}

