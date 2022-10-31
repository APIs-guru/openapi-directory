package shared



type ControlSet struct {
    Controls []Control `json:"controls,omitempty"`
    ID *string `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

