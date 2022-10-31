package shared



type ListUsersResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    Users []User `json:"Users"`
    
}

