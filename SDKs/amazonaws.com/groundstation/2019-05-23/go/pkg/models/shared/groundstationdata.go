package shared

// GroundStationData
// Information about the ground station data.
type GroundStationData struct {
	GroundStationID   *string `json:"groundStationId,omitempty"`
	GroundStationName *string `json:"groundStationName,omitempty"`
	Region            *string `json:"region,omitempty"`
}
