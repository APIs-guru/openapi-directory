package shared

// CsrExtensions
// Describes the certificate extensions to be added to the certificate signing request (CSR).
type CsrExtensions struct {
	KeyUsage                 *KeyUsage           `json:"KeyUsage,omitempty"`
	SubjectInformationAccess []AccessDescription `json:"SubjectInformationAccess,omitempty"`
}
