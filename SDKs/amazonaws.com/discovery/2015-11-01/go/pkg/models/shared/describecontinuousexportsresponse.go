package shared



type DescribeContinuousExportsResponse struct {
    Descriptions []ContinuousExportDescription `json:"descriptions,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

