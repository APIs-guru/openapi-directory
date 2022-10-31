package shared



type FileSystemEndpoints struct {
    Intercluster *FileSystemEndpoint `json:"Intercluster,omitempty"`
    Management *FileSystemEndpoint `json:"Management,omitempty"`
    
}

