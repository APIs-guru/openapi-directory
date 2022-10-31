package shared



type HeaderMatchMethod struct {
    Exact *string `json:"exact,omitempty"`
    Prefix *string `json:"prefix,omitempty"`
    Range *MatchRange `json:"range,omitempty"`
    Regex *string `json:"regex,omitempty"`
    Suffix *string `json:"suffix,omitempty"`
    
}

