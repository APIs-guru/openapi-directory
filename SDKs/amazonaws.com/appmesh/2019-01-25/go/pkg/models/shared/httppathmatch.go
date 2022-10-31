package shared



type HTTPPathMatch struct {
    Exact *string `json:"exact,omitempty"`
    Regex *string `json:"regex,omitempty"`
    
}

