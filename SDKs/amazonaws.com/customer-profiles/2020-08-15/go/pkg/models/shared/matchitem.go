package shared

// MatchItem
// The Match group object.
type MatchItem struct {
	MatchID    *string  `json:"MatchId,omitempty"`
	ProfileIds []string `json:"ProfileIds,omitempty"`
}
