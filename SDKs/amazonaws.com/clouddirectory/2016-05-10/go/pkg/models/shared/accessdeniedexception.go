package shared

// AccessDeniedException
// Access denied. Check your permissions.
type AccessDeniedException struct {
	Message *string `json:"Message,omitempty"`
}
