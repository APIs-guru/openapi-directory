package shared



type ExportFilter struct {
    Condition string `json:"condition"`
    Name string `json:"name"`
    Values []string `json:"values"`
    
}

