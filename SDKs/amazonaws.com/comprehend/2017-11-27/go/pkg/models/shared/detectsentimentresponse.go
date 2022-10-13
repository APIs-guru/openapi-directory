package shared

type DetectSentimentResponse struct {
	Sentiment      *SentimentTypeEnum `json:"Sentiment"`
	SentimentScore *SentimentScore    `json:"SentimentScore"`
}
