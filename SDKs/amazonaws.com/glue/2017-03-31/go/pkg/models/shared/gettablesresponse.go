package shared

type GetTablesResponse struct {
	NextToken *string `json:"NextToken"`
	TableList []Table `json:"TableList"`
}
