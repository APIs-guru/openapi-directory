package shared

type ZendeskDestinationProperties struct {
	ErrorHandlingConfig *ErrorHandlingConfig    `json:"errorHandlingConfig"`
	IDFieldNames        []string                `json:"idFieldNames"`
	Object              string                  `json:"object"`
	WriteOperationType  *WriteOperationTypeEnum `json:"writeOperationType"`
}
