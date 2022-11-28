package shared

// HTTPAuthorization
// The authorization method used to send messages.
type HTTPAuthorization struct {
	Sigv4 *SigV4Authorization `json:"sigv4,omitempty"`
}
