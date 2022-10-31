package shared



type UpdateStreamResponse struct {
    Description *string `json:"description,omitempty"`
    StreamArn *string `json:"streamArn,omitempty"`
    StreamID *string `json:"streamId,omitempty"`
    StreamVersion *int64 `json:"streamVersion,omitempty"`
    
}

