package shared

import (
"time")

type CertificateDescription struct {
    CaCertificateID *string `json:"caCertificateId,omitempty"`
    CertificateArn *string `json:"certificateArn,omitempty"`
    CertificateID *string `json:"certificateId,omitempty"`
    CertificateMode *CertificateModeEnum `json:"certificateMode,omitempty"`
    CertificatePem *string `json:"certificatePem,omitempty"`
    CreationDate *time.Time `json:"creationDate,omitempty"`
    CustomerVersion *int64 `json:"customerVersion,omitempty"`
    GenerationID *string `json:"generationId,omitempty"`
    LastModifiedDate *time.Time `json:"lastModifiedDate,omitempty"`
    OwnedBy *string `json:"ownedBy,omitempty"`
    PreviousOwnedBy *string `json:"previousOwnedBy,omitempty"`
    Status *CertificateStatusEnum `json:"status,omitempty"`
    TransferData *TransferData `json:"transferData,omitempty"`
    Validity *CertificateValidity `json:"validity,omitempty"`
    
}

