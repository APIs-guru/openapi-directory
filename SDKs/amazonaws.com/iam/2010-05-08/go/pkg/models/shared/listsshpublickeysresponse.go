package shared

// ListSSHPublicKeysResponse
// Contains the response to a successful <a>ListSSHPublicKeys</a> request.
type ListSSHPublicKeysResponse struct {
	IsTruncated   *bool
	Marker        *string
	SSHPublicKeys []SSHPublicKeyMetadata
}
