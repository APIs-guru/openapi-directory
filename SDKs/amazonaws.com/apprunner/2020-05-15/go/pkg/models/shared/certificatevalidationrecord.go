package shared

type CertificateValidationRecord struct {
	Name   *string                                `json:"Name"`
	Status *CertificateValidationRecordStatusEnum `json:"Status"`
	Type   *string                                `json:"Type"`
	Value  *string                                `json:"Value"`
}
