package shared

import (
	"time"
)

type ClientCertificate struct {
	ClientCertificateID   *string           `json:"clientCertificateId"`
	CreatedDate           *time.Time        `json:"createdDate"`
	Description           *string           `json:"description"`
	ExpirationDate        *time.Time        `json:"expirationDate"`
	PemEncodedCertificate *string           `json:"pemEncodedCertificate"`
	Tags                  map[string]string `json:"tags"`
}
