package shared

import (
	"time"
)

type CreateProvisioningClaimResponse struct {
	CertificateID  *string    `json:"certificateId"`
	CertificatePem *string    `json:"certificatePem"`
	Expiration     *time.Time `json:"expiration"`
	KeyPair        *KeyPair   `json:"keyPair"`
}
