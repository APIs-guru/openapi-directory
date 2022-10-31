package shared



type Notifications struct {
    Completed *string `json:"Completed,omitempty"`
    Error *string `json:"Error,omitempty"`
    Progressing *string `json:"Progressing,omitempty"`
    Warning *string `json:"Warning,omitempty"`
    
}

