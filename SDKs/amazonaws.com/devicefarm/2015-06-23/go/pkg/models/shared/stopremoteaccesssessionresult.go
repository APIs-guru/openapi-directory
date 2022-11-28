package shared

// StopRemoteAccessSessionResult
// Represents the response from the server that describes the remote access session when AWS Device Farm stops the session.
type StopRemoteAccessSessionResult struct {
	RemoteAccessSession *RemoteAccessSession `json:"remoteAccessSession,omitempty"`
}
