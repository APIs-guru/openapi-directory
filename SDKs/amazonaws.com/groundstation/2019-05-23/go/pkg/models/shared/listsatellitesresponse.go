package shared

type ListSatellitesResponse struct {
	NextToken  *string             `json:"nextToken"`
	Satellites []SatelliteListItem `json:"satellites"`
}
