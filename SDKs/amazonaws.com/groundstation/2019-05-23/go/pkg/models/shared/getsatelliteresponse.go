package shared

type GetSatelliteResponse struct {
	GroundStations   []string `json:"groundStations"`
	NoradSatelliteID *int64   `json:"noradSatelliteID"`
	SatelliteArn     *string  `json:"satelliteArn"`
	SatelliteID      *string  `json:"satelliteId"`
}
