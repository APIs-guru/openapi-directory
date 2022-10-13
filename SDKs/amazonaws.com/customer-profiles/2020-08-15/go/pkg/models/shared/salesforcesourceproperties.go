package shared

type SalesforceSourceProperties struct {
	EnableDynamicFieldUpdate *bool  `json:"EnableDynamicFieldUpdate"`
	IncludeDeletedRecords    *bool  `json:"IncludeDeletedRecords"`
	Object                   string `json:"Object"`
}
