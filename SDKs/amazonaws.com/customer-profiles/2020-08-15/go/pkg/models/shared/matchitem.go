package shared

type MatchItem struct {
	MatchID    *string  `json:"MatchId"`
	ProfileIds []string `json:"ProfileIds"`
}
