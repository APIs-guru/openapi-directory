package shared



type GetTablesResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    TableList []Table `json:"TableList,omitempty"`
    
}

