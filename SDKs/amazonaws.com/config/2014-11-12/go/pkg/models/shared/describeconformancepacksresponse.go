package shared



type DescribeConformancePacksResponse struct {
    ConformancePackDetails []ConformancePackDetail `json:"ConformancePackDetails,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

