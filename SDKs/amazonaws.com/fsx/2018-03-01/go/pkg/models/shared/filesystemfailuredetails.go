package shared

// FileSystemFailureDetails
// A structure providing details of any failures that occur when creating the file system has failed.
type FileSystemFailureDetails struct {
	Message *string `json:"Message,omitempty"`
}
