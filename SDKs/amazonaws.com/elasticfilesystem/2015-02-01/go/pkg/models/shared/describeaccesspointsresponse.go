package shared



type DescribeAccessPointsResponse struct {
    AccessPoints []AccessPointDescription `json:"AccessPoints,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

