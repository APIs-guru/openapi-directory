package shared



type ListStreamsResponse struct {
    NextToken *string `json:"nextToken,omitempty"`
    Streams []StreamSummary `json:"streams,omitempty"`
    
}

