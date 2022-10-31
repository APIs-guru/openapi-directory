package shared



type CaptionSource struct {
    Encryption *Encryption `json:"Encryption,omitempty"`
    Key *string `json:"Key,omitempty"`
    Label *string `json:"Label,omitempty"`
    Language *string `json:"Language,omitempty"`
    TimeOffset *string `json:"TimeOffset,omitempty"`
    
}

