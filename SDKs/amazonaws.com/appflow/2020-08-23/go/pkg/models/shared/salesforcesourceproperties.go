package shared

type SalesforceSourceProperties struct {
	EnableDynamicFieldUpdate *bool  `json:"enableDynamicFieldUpdate"`
	IncludeDeletedRecords    *bool  `json:"includeDeletedRecords"`
	Object                   string `json:"object"`
}
