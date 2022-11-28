package shared

// SimplifiedApplication
// The returned release label application names or versions.
type SimplifiedApplication struct {
	Name    *string `json:"Name,omitempty"`
	Version *string `json:"Version,omitempty"`
}
