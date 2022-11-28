package shared

// DirectoryAlreadyExistsException
// Indicates that a <a>Directory</a> could not be created due to a naming conflict. Choose a different name and try again.
type DirectoryAlreadyExistsException struct {
	Message *string `json:"Message,omitempty"`
}
