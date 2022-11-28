package shared

// LinkNameAlreadyInUseException
// Indicates that a link could not be created due to a naming conflict. Choose a different name and then try again.
type LinkNameAlreadyInUseException struct {
	Message *string `json:"Message,omitempty"`
}
