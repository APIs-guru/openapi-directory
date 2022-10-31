package shared



type DescribeFileSystemsResponse struct {
    FileSystems []FileSystemDescription `json:"FileSystems,omitempty"`
    Marker *string `json:"Marker,omitempty"`
    NextMarker *string `json:"NextMarker,omitempty"`
    
}

