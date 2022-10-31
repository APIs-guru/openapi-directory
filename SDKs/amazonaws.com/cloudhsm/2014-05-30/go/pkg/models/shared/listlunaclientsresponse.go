package shared



type ListLunaClientsResponse struct {
    ClientList []string `json:"ClientList"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

