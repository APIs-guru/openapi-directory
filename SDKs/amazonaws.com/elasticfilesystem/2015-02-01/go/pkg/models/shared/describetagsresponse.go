package shared



type DescribeTagsResponse struct {
    Marker *string `json:"Marker,omitempty"`
    NextMarker *string `json:"NextMarker,omitempty"`
    Tags []Tag `json:"Tags"`
    
}

