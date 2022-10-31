package shared

import (
"time")

type CreateProvisioningClaimResponse struct {
    CertificateID *string `json:"certificateId,omitempty"`
    CertificatePem *string `json:"certificatePem,omitempty"`
    Expiration *time.Time `json:"expiration,omitempty"`
    KeyPair *KeyPair `json:"keyPair,omitempty"`
    
}

