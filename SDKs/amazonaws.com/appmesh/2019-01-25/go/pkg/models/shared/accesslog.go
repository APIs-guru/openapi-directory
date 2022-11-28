package shared

// AccessLog
// An object that represents the access logging information for a virtual node.
type AccessLog struct {
	File *FileAccessLog `json:"file,omitempty"`
}
