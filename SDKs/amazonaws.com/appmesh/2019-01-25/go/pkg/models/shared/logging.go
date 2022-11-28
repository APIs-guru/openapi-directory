package shared

// Logging
// An object that represents the logging information for a virtual node.
type Logging struct {
	AccessLog *AccessLog `json:"accessLog,omitempty"`
}
