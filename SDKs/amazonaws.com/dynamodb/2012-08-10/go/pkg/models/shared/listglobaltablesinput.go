package shared

type ListGlobalTablesInput struct {
	ExclusiveStartGlobalTableName *string `json:"ExclusiveStartGlobalTableName,omitempty"`
	Limit                         *int64  `json:"Limit,omitempty"`
	RegionName                    *string `json:"RegionName,omitempty"`
}
