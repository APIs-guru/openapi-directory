package shared



type DescribeCustomDomainsRequest struct {
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    ServiceArn string `json:"ServiceArn"`
    
}

