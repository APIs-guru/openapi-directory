package shared

// CreateRemoteAccessSessionResult
// Represents the server response from a request to create a remote access session.
type CreateRemoteAccessSessionResult struct {
	RemoteAccessSession *RemoteAccessSession `json:"remoteAccessSession,omitempty"`
}
