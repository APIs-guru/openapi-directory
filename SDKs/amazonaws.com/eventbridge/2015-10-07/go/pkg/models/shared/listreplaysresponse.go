package shared

type ListReplaysResponse struct {
	NextToken *string  `json:"NextToken,omitempty"`
	Replays   []Replay `json:"Replays,omitempty"`
}
