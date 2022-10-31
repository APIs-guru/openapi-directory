package shared

import (
"time")

type CaCertificateDescription struct {
    AutoRegistrationStatus *AutoRegistrationStatusEnum `json:"autoRegistrationStatus,omitempty"`
    CertificateArn *string `json:"certificateArn,omitempty"`
    CertificateID *string `json:"certificateId,omitempty"`
    CertificatePem *string `json:"certificatePem,omitempty"`
    CreationDate *time.Time `json:"creationDate,omitempty"`
    CustomerVersion *int64 `json:"customerVersion,omitempty"`
    GenerationID *string `json:"generationId,omitempty"`
    LastModifiedDate *time.Time `json:"lastModifiedDate,omitempty"`
    OwnedBy *string `json:"ownedBy,omitempty"`
    Status *CaCertificateStatusEnum `json:"status,omitempty"`
    Validity *CertificateValidity `json:"validity,omitempty"`
    
}

