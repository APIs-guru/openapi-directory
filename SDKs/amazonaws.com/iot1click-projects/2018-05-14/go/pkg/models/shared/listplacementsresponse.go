package shared

type ListPlacementsResponse struct {
	NextToken  *string            `json:"nextToken,omitempty"`
	Placements []PlacementSummary `json:"placements"`
}
