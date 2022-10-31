package shared



type DescribeVolumesRequest struct {
    Filters []VolumeFilter `json:"Filters,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    VolumeIds []string `json:"VolumeIds,omitempty"`
    
}

