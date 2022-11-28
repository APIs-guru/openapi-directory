package shared

// DirectoryNotEnabledException
// Operations are only permitted on enabled directories.
type DirectoryNotEnabledException struct {
	Message *string `json:"Message,omitempty"`
}
