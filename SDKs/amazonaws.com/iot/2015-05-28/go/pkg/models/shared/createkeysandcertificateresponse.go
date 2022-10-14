package shared

type CreateKeysAndCertificateResponse struct {
	CertificateArn *string  `json:"certificateArn,omitempty"`
	CertificateID  *string  `json:"certificateId,omitempty"`
	CertificatePem *string  `json:"certificatePem,omitempty"`
	KeyPair        *KeyPair `json:"keyPair,omitempty"`
}
