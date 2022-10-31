package shared



type GetTranscriptResponse struct {
    InitialContactID *string `json:"InitialContactId,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    Transcript []Item `json:"Transcript,omitempty"`
    
}

