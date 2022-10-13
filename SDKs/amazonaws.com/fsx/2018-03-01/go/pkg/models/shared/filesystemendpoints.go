package shared

type FileSystemEndpoints struct {
	Intercluster *FileSystemEndpoint `json:"Intercluster"`
	Management   *FileSystemEndpoint `json:"Management"`
}
