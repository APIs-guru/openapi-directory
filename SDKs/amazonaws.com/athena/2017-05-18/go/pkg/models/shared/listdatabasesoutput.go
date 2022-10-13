package shared

type ListDatabasesOutput struct {
	DatabaseList []Database `json:"DatabaseList"`
	NextToken    *string    `json:"NextToken"`
}
