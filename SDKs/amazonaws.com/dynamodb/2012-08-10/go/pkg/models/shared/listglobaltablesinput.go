package shared

type ListGlobalTablesInput struct {
	ExclusiveStartGlobalTableName *string `json:"ExclusiveStartGlobalTableName"`
	Limit                         *int64  `json:"Limit"`
	RegionName                    *string `json:"RegionName"`
}
