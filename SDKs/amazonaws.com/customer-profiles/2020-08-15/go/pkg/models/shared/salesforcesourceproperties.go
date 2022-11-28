package shared

// SalesforceSourceProperties
// The properties that are applied when Salesforce is being used as a source.
type SalesforceSourceProperties struct {
	EnableDynamicFieldUpdate *bool  `json:"EnableDynamicFieldUpdate,omitempty"`
	IncludeDeletedRecords    *bool  `json:"IncludeDeletedRecords,omitempty"`
	Object                   string `json:"Object"`
}
