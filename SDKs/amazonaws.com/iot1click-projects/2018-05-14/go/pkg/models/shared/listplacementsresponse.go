package shared

type ListPlacementsResponse struct {
	NextToken  *string            `json:"nextToken"`
	Placements []PlacementSummary `json:"placements"`
}
