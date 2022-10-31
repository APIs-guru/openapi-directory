package shared



type GetPartitionsRequest struct {
    CatalogID *string `json:"CatalogId,omitempty"`
    DatabaseName string `json:"DatabaseName"`
    ExcludeColumnSchema *bool `json:"ExcludeColumnSchema,omitempty"`
    Expression *string `json:"Expression,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    Segment *Segment `json:"Segment,omitempty"`
    TableName string `json:"TableName"`
    
}

