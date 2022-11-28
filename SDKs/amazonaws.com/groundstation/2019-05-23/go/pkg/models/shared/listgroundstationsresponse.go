package shared

// ListGroundStationsResponse
// <p/>
type ListGroundStationsResponse struct {
	GroundStationList []GroundStationData `json:"groundStationList,omitempty"`
	NextToken         *string             `json:"nextToken,omitempty"`
}
