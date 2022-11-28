package shared

// ClientCertificateRevocationListStatus
// Describes the state of a client certificate revocation list.
type ClientCertificateRevocationListStatus struct {
	Code    *ClientCertificateRevocationListStatusCodeEnum
	Message *string
}
