package shared



type DescribeIndexResponse struct {
    IndexName *string `json:"indexName,omitempty"`
    IndexStatus *IndexStatusEnum `json:"indexStatus,omitempty"`
    Schema *string `json:"schema,omitempty"`
    
}

