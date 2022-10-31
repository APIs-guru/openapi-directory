package shared



type SuggestResponse struct {
    Status *SuggestStatus `json:"status,omitempty"`
    Suggest *SuggestModel `json:"suggest,omitempty"`
    
}

