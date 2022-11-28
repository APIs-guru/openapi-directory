package shared

// FileSystemEndpoints
// An Amazon FSx for NetApp ONTAP file system has the following endpoints that are used to access data or to manage the file system using the NetApp ONTAP CLI, REST API, or NetApp SnapMirror.
type FileSystemEndpoints struct {
	Intercluster *FileSystemEndpoint `json:"Intercluster,omitempty"`
	Management   *FileSystemEndpoint `json:"Management,omitempty"`
}
