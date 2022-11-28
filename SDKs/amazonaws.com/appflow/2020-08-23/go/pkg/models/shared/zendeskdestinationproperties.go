package shared

// ZendeskDestinationProperties
// The properties that are applied when Zendesk is used as a destination.
type ZendeskDestinationProperties struct {
	ErrorHandlingConfig *ErrorHandlingConfig    `json:"errorHandlingConfig,omitempty"`
	IDFieldNames        []string                `json:"idFieldNames,omitempty"`
	Object              string                  `json:"object"`
	WriteOperationType  *WriteOperationTypeEnum `json:"writeOperationType,omitempty"`
}
