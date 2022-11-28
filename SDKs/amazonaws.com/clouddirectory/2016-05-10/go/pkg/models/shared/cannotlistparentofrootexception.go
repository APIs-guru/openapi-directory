package shared

// CannotListParentOfRootException
// Cannot list the parents of a <a>Directory</a> root.
type CannotListParentOfRootException struct {
	Message *string `json:"Message,omitempty"`
}
