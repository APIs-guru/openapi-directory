package shared

type ListStreamsResponse struct {
	NextToken *string         `json:"nextToken"`
	Streams   []StreamSummary `json:"streams"`
}
