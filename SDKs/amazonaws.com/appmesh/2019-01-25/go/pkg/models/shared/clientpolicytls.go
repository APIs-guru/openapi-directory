package shared

type ClientPolicyTLS struct {
	Certificate *ClientTLSCertificate `json:"certificate"`
	Enforce     *bool                 `json:"enforce"`
	Ports       []int64               `json:"ports"`
	Validation  TLSValidationContext  `json:"validation"`
}
