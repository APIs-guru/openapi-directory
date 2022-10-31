package shared



type APIPassthrough struct {
    Extensions *Extensions `json:"Extensions,omitempty"`
    Subject *Asn1Subject `json:"Subject,omitempty"`
    
}

