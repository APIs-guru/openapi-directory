package shared

// InstallToRemoteAccessSessionRequest
// Represents the request to install an Android application (in .apk format) or an iOS application (in .ipa format) as part of a remote access session.
type InstallToRemoteAccessSessionRequest struct {
	AppArn                 string `json:"appArn"`
	RemoteAccessSessionArn string `json:"remoteAccessSessionArn"`
}
