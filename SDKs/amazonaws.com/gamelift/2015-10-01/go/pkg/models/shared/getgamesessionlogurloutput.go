package shared

// GetGameSessionLogURLOutput
// Represents the returned data in response to a request operation.
type GetGameSessionLogURLOutput struct {
	PreSignedURL *string `json:"PreSignedUrl,omitempty"`
}
