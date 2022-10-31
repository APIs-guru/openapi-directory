package shared



type ListGroundStationsResponse struct {
    GroundStationList []GroundStationData `json:"groundStationList,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

