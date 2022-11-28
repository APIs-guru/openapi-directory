package shared

// BatchDetectSentimentItemResult
// The result of calling the operation. The operation returns one object for each document that is successfully processed by the operation.
type BatchDetectSentimentItemResult struct {
	Index          *int64             `json:"Index,omitempty"`
	Sentiment      *SentimentTypeEnum `json:"Sentiment,omitempty"`
	SentimentScore *SentimentScore    `json:"SentimentScore,omitempty"`
}
