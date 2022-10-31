package shared



type DetectSentimentResponse struct {
    Sentiment *SentimentTypeEnum `json:"Sentiment,omitempty"`
    SentimentScore *SentimentScore `json:"SentimentScore,omitempty"`
    
}

