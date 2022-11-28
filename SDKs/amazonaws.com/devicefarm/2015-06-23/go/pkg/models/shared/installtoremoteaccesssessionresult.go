package shared

// InstallToRemoteAccessSessionResult
// Represents the response from the server after AWS Device Farm makes a request to install to a remote access session.
type InstallToRemoteAccessSessionResult struct {
	AppUpload *Upload `json:"appUpload,omitempty"`
}
