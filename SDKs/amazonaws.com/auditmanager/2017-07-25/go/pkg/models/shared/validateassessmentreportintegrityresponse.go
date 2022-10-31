package shared

type ValidateAssessmentReportIntegrityResponse struct {
	SignatureAlgorithm *string  `json:"signatureAlgorithm,omitempty"`
	SignatureDateTime  *string  `json:"signatureDateTime,omitempty"`
	SignatureKeyID     *string  `json:"signatureKeyId,omitempty"`
	SignatureValid     *bool    `json:"signatureValid,omitempty"`
	ValidationErrors   []string `json:"validationErrors,omitempty"`
}
