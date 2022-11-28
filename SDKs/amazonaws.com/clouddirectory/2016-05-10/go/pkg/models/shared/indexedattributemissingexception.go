package shared

// IndexedAttributeMissingException
// An object has been attempted to be attached to an object that does not have the appropriate attribute value.
type IndexedAttributeMissingException struct {
	Message *string `json:"Message,omitempty"`
}
