package shared

import (
"time")

type ClientCertificate struct {
    ClientCertificateID *string `json:"clientCertificateId,omitempty"`
    CreatedDate *time.Time `json:"createdDate,omitempty"`
    Description *string `json:"description,omitempty"`
    ExpirationDate *time.Time `json:"expirationDate,omitempty"`
    PemEncodedCertificate *string `json:"pemEncodedCertificate,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    
}

