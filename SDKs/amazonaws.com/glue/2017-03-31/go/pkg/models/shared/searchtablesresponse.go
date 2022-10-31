package shared



type SearchTablesResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    TableList []Table `json:"TableList,omitempty"`
    
}

