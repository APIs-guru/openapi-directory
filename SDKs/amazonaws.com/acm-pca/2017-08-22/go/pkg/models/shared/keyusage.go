package shared

type KeyUsage struct {
	CrlSign          *bool `json:"CRLSign"`
	DataEncipherment *bool `json:"DataEncipherment"`
	DecipherOnly     *bool `json:"DecipherOnly"`
	DigitalSignature *bool `json:"DigitalSignature"`
	EncipherOnly     *bool `json:"EncipherOnly"`
	KeyAgreement     *bool `json:"KeyAgreement"`
	KeyCertSign      *bool `json:"KeyCertSign"`
	KeyEncipherment  *bool `json:"KeyEncipherment"`
	NonRepudiation   *bool `json:"NonRepudiation"`
}
