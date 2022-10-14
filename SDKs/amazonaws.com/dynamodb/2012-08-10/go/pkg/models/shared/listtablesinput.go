package shared

type ListTablesInput struct {
	ExclusiveStartTableName *string `json:"ExclusiveStartTableName,omitempty"`
	Limit                   *int64  `json:"Limit,omitempty"`
}
