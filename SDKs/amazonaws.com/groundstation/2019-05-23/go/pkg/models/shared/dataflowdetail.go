package shared



type DataflowDetail struct {
    Destination *Destination `json:"destination,omitempty"`
    ErrorMessage *string `json:"errorMessage,omitempty"`
    Source *Source `json:"source,omitempty"`
    
}

