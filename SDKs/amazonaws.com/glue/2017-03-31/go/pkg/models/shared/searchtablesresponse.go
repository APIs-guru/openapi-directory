package shared

type SearchTablesResponse struct {
	NextToken *string `json:"NextToken"`
	TableList []Table `json:"TableList"`
}
