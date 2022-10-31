package shared



type DescribeVolumesResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    Volumes []Volume `json:"Volumes,omitempty"`
    
}

