package shared

// UnsupportedIndexTypeException
// Indicates that the requested index type is not supported.
type UnsupportedIndexTypeException struct {
	Message *string `json:"Message,omitempty"`
}
