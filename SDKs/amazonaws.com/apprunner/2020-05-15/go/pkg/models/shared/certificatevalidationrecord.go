package shared

// CertificateValidationRecord
// Describes a certificate CNAME record to add to your DNS. For more information, see <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_AssociateCustomDomain.html">AssociateCustomDomain</a>.
type CertificateValidationRecord struct {
	Name   *string                                `json:"Name,omitempty"`
	Status *CertificateValidationRecordStatusEnum `json:"Status,omitempty"`
	Type   *string                                `json:"Type,omitempty"`
	Value  *string                                `json:"Value,omitempty"`
}
