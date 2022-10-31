package shared



type TableError struct {
    ErrorDetail *ErrorDetail `json:"ErrorDetail,omitempty"`
    TableName *string `json:"TableName,omitempty"`
    
}

