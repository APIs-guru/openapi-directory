package shared

// DirectoryNotDisabledException
// An operation can only operate on a disabled directory.
type DirectoryNotDisabledException struct {
	Message *string `json:"Message,omitempty"`
}
