package shared

// DirectoryDeletedException
// A directory that has been deleted and to which access has been attempted. Note: The requested resource will eventually cease to exist.
type DirectoryDeletedException struct {
	Message *string `json:"Message,omitempty"`
}
