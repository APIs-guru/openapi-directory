package shared

type ListReplaysResponse struct {
	NextToken *string  `json:"NextToken"`
	Replays   []Replay `json:"Replays"`
}
