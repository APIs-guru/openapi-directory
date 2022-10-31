package shared



type DescribeImagesRequest struct {
    Arns []string `json:"Arns,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    Names []string `json:"Names,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    Type *VisibilityTypeEnum `json:"Type,omitempty"`
    
}

