package shared

type ValidateAssessmentReportIntegrityResponse struct {
	SignatureAlgorithm *string  `json:"signatureAlgorithm"`
	SignatureDateTime  *string  `json:"signatureDateTime"`
	SignatureKeyID     *string  `json:"signatureKeyId"`
	SignatureValid     *bool    `json:"signatureValid"`
	ValidationErrors   []string `json:"validationErrors"`
}
