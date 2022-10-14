package shared

type SentimentScore struct {
	Mixed    *float32 `json:"Mixed,omitempty"`
	Negative *float32 `json:"Negative,omitempty"`
	Neutral  *float32 `json:"Neutral,omitempty"`
	Positive *float32 `json:"Positive,omitempty"`
}
