package shared



type BatchUpdatePartitionFailureEntry struct {
    ErrorDetail *ErrorDetail `json:"ErrorDetail,omitempty"`
    PartitionValueList []string `json:"PartitionValueList,omitempty"`
    
}

