package shared

// ServerCertificate
// <p>Contains information about a server certificate.</p> <p> This data type is used as a response element in the <a>GetServerCertificate</a> operation. </p>
type ServerCertificate struct {
	CertificateBody           string
	CertificateChain          *string
	ServerCertificateMetadata ServerCertificateMetadata
	Tags                      []Tag
}
