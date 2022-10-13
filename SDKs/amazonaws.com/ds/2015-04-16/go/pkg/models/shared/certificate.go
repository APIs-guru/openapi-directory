package shared

import (
	"time"
)

type Certificate struct {
	CertificateID          *string                 `json:"CertificateId"`
	ClientCertAuthSettings *ClientCertAuthSettings `json:"ClientCertAuthSettings"`
	CommonName             *string                 `json:"CommonName"`
	ExpiryDateTime         *time.Time              `json:"ExpiryDateTime"`
	RegisteredDateTime     *time.Time              `json:"RegisteredDateTime"`
	State                  *CertificateStateEnum   `json:"State"`
	StateReason            *string                 `json:"StateReason"`
	Type                   *CertificateTypeEnum    `json:"Type"`
}
