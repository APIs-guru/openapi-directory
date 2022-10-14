package shared

type BatchDetectSentimentItemResult struct {
	Index          *int64             `json:"Index,omitempty"`
	Sentiment      *SentimentTypeEnum `json:"Sentiment,omitempty"`
	SentimentScore *SentimentScore    `json:"SentimentScore,omitempty"`
}
