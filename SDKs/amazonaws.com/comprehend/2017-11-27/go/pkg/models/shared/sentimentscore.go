package shared

type SentimentScore struct {
	Mixed    *float32 `json:"Mixed"`
	Negative *float32 `json:"Negative"`
	Neutral  *float32 `json:"Neutral"`
	Positive *float32 `json:"Positive"`
}
