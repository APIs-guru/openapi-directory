package shared

type ListRemoteAccessSessionsResult struct {
	NextToken            *string               `json:"nextToken"`
	RemoteAccessSessions []RemoteAccessSession `json:"remoteAccessSessions"`
}
