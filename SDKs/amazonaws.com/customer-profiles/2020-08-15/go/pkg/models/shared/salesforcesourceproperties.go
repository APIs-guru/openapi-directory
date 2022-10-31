package shared

type SalesforceSourceProperties struct {
	EnableDynamicFieldUpdate *bool  `json:"EnableDynamicFieldUpdate,omitempty"`
	IncludeDeletedRecords    *bool  `json:"IncludeDeletedRecords,omitempty"`
	Object                   string `json:"Object"`
}
