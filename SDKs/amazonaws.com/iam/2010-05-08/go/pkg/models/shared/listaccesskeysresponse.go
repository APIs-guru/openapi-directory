package shared

// ListAccessKeysResponse
// Contains the response to a successful <a>ListAccessKeys</a> request.
type ListAccessKeysResponse struct {
	AccessKeyMetadata []AccessKeyMetadata
	IsTruncated       *bool
	Marker            *string
}
