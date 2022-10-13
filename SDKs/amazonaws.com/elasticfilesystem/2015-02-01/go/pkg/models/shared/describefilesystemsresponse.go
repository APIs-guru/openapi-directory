package shared

type DescribeFileSystemsResponse struct {
	FileSystems []FileSystemDescription `json:"FileSystems"`
	Marker      *string                 `json:"Marker"`
	NextMarker  *string                 `json:"NextMarker"`
}
