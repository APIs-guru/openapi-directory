package shared

type InstallToRemoteAccessSessionRequest struct {
	AppArn                 string `json:"appArn"`
	RemoteAccessSessionArn string `json:"remoteAccessSessionArn"`
}
