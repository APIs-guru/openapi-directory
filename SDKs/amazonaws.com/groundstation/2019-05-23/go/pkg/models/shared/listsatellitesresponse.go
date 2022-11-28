package shared

// ListSatellitesResponse
// <p/>
type ListSatellitesResponse struct {
	NextToken  *string             `json:"nextToken,omitempty"`
	Satellites []SatelliteListItem `json:"satellites,omitempty"`
}
