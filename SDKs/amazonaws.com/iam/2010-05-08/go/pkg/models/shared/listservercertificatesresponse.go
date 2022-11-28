package shared

// ListServerCertificatesResponse
// Contains the response to a successful <a>ListServerCertificates</a> request.
type ListServerCertificatesResponse struct {
	IsTruncated                   *bool
	Marker                        *string
	ServerCertificateMetadataList []ServerCertificateMetadata
}
