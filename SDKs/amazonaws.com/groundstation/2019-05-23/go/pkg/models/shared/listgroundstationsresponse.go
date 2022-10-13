package shared

type ListGroundStationsResponse struct {
	GroundStationList []GroundStationData `json:"groundStationList"`
	NextToken         *string             `json:"nextToken"`
}
