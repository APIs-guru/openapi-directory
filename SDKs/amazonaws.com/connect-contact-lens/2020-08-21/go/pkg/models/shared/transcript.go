package shared

type Transcript struct {
	BeginOffsetMillis int64              `json:"BeginOffsetMillis"`
	Content           string             `json:"Content"`
	EndOffsetMillis   int64              `json:"EndOffsetMillis"`
	ID                string             `json:"Id"`
	IssuesDetected    []IssueDetected    `json:"IssuesDetected"`
	ParticipantID     string             `json:"ParticipantId"`
	ParticipantRole   string             `json:"ParticipantRole"`
	Sentiment         SentimentValueEnum `json:"Sentiment"`
}
