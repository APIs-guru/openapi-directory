package shared



type JdbcTarget struct {
    ConnectionName *string `json:"ConnectionName,omitempty"`
    Exclusions []string `json:"Exclusions,omitempty"`
    Path *string `json:"Path,omitempty"`
    
}

