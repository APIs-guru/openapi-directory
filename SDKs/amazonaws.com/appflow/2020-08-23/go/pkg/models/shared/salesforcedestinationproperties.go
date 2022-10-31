package shared



type SalesforceDestinationProperties struct {
    ErrorHandlingConfig *ErrorHandlingConfig `json:"errorHandlingConfig,omitempty"`
    IDFieldNames []string `json:"idFieldNames,omitempty"`
    Object string `json:"object"`
    WriteOperationType *WriteOperationTypeEnum `json:"writeOperationType,omitempty"`
    
}

