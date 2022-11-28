package shared

// ListSigningCertificatesResponse
// Contains the response to a successful <a>ListSigningCertificates</a> request.
type ListSigningCertificatesResponse struct {
	Certificates []SigningCertificate
	IsTruncated  *bool
	Marker       *string
}
