package shared

type RegisterThingResponse struct {
	CertificatePem *string           `json:"certificatePem"`
	ResourceArns   map[string]string `json:"resourceArns"`
}
