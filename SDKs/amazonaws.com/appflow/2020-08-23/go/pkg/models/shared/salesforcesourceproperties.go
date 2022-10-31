package shared

type SalesforceSourceProperties struct {
	EnableDynamicFieldUpdate *bool  `json:"enableDynamicFieldUpdate,omitempty"`
	IncludeDeletedRecords    *bool  `json:"includeDeletedRecords,omitempty"`
	Object                   string `json:"object"`
}
