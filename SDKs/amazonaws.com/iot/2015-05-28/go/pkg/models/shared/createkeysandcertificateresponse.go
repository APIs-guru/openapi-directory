package shared

type CreateKeysAndCertificateResponse struct {
	CertificateArn *string  `json:"certificateArn"`
	CertificateID  *string  `json:"certificateId"`
	CertificatePem *string  `json:"certificatePem"`
	KeyPair        *KeyPair `json:"keyPair"`
}
