package shared



type DescribeUsersResult struct {
    NextToken *string `json:"NextToken,omitempty"`
    Users []User `json:"Users,omitempty"`
    
}

