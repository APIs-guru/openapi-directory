package shared

type RegisterThingResponse struct {
	CertificatePem *string           `json:"certificatePem,omitempty"`
	ResourceArns   map[string]string `json:"resourceArns,omitempty"`
}
