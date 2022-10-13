package shared

type BatchDetectSentimentItemResult struct {
	Index          *int64             `json:"Index"`
	Sentiment      *SentimentTypeEnum `json:"Sentiment"`
	SentimentScore *SentimentScore    `json:"SentimentScore"`
}
