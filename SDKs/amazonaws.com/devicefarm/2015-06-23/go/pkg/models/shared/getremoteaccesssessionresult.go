package shared

// GetRemoteAccessSessionResult
// Represents the response from the server that lists detailed information about the remote access session.
type GetRemoteAccessSessionResult struct {
	RemoteAccessSession *RemoteAccessSession `json:"remoteAccessSession,omitempty"`
}
