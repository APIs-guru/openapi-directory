package shared

type ListTablesInput struct {
	ExclusiveStartTableName *string `json:"ExclusiveStartTableName"`
	Limit                   *int64  `json:"Limit"`
}
