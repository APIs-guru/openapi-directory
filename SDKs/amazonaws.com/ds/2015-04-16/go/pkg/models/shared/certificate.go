package shared

import (
	"time"
)

type Certificate struct {
	CertificateID          *string                 `json:"CertificateId,omitempty"`
	ClientCertAuthSettings *ClientCertAuthSettings `json:"ClientCertAuthSettings,omitempty"`
	CommonName             *string                 `json:"CommonName,omitempty"`
	ExpiryDateTime         *time.Time              `json:"ExpiryDateTime,omitempty"`
	RegisteredDateTime     *time.Time              `json:"RegisteredDateTime,omitempty"`
	State                  *CertificateStateEnum   `json:"State,omitempty"`
	StateReason            *string                 `json:"StateReason,omitempty"`
	Type                   *CertificateTypeEnum    `json:"Type,omitempty"`
}
