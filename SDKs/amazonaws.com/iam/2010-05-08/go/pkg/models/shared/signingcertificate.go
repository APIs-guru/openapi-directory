package shared

import (
	"time"
)

// SigningCertificate
// <p>Contains information about an X.509 signing certificate.</p> <p>This data type is used as a response element in the <a>UploadSigningCertificate</a> and <a>ListSigningCertificates</a> operations. </p>
type SigningCertificate struct {
	CertificateBody string
	CertificateID   string
	Status          StatusTypeEnum
	UploadDate      *time.Time
	UserName        string
}
