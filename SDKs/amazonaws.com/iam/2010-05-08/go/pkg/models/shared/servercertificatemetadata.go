package shared

import (
	"time"
)

// ServerCertificateMetadata
// <p>Contains information about a server certificate without its certificate body, certificate chain, and private key.</p> <p> This data type is used as a response element in the <a>UploadServerCertificate</a> and <a>ListServerCertificates</a> operations. </p>
type ServerCertificateMetadata struct {
	Arn                   string
	Expiration            *time.Time
	Path                  string
	ServerCertificateID   string
	ServerCertificateName string
	UploadDate            *time.Time
}
