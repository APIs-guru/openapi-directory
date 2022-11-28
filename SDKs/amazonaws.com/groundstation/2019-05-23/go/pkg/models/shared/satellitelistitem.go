package shared

// SatelliteListItem
// Item in a list of satellites.
type SatelliteListItem struct {
	GroundStations   []string `json:"groundStations,omitempty"`
	NoradSatelliteID *int64   `json:"noradSatelliteID,omitempty"`
	SatelliteArn     *string  `json:"satelliteArn,omitempty"`
	SatelliteID      *string  `json:"satelliteId,omitempty"`
}
