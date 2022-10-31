package shared

type ListRemoteAccessSessionsResult struct {
	NextToken            *string               `json:"nextToken,omitempty"`
	RemoteAccessSessions []RemoteAccessSession `json:"remoteAccessSessions,omitempty"`
}
