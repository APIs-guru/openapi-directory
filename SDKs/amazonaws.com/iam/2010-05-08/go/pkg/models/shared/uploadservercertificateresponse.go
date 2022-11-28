package shared

// UploadServerCertificateResponse
// Contains the response to a successful <a>UploadServerCertificate</a> request.
type UploadServerCertificateResponse struct {
	ServerCertificateMetadata *ServerCertificateMetadata
	Tags                      []Tag
}
