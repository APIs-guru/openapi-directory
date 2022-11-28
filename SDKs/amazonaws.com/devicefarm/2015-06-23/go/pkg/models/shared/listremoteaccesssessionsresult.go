package shared

// ListRemoteAccessSessionsResult
// Represents the response from the server after AWS Device Farm makes a request to return information about the remote access session.
type ListRemoteAccessSessionsResult struct {
	NextToken            *string               `json:"nextToken,omitempty"`
	RemoteAccessSessions []RemoteAccessSession `json:"remoteAccessSessions,omitempty"`
}
