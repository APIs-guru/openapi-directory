package shared

type ListTrailsResponse struct {
	NextToken *string     `json:"NextToken"`
	Trails    []TrailInfo `json:"Trails"`
}
