package shared

// SalesforceSourceProperties
//
//	The properties that are applied when Salesforce is being used as a source.
type SalesforceSourceProperties struct {
	EnableDynamicFieldUpdate *bool  `json:"enableDynamicFieldUpdate,omitempty"`
	IncludeDeletedRecords    *bool  `json:"includeDeletedRecords,omitempty"`
	Object                   string `json:"object"`
}
