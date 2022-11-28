package shared

// SalesforceDestinationProperties
//
//	The properties that are applied when Salesforce is being used as a destination.
type SalesforceDestinationProperties struct {
	ErrorHandlingConfig *ErrorHandlingConfig    `json:"errorHandlingConfig,omitempty"`
	IDFieldNames        []string                `json:"idFieldNames,omitempty"`
	Object              string                  `json:"object"`
	WriteOperationType  *WriteOperationTypeEnum `json:"writeOperationType,omitempty"`
}
