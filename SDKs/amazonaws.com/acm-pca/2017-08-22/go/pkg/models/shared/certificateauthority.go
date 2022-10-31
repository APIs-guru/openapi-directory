package shared

import (
"time")

type CertificateAuthority struct {
    Arn *string `json:"Arn,omitempty"`
    CertificateAuthorityConfiguration *CertificateAuthorityConfiguration `json:"CertificateAuthorityConfiguration,omitempty"`
    CreatedAt *time.Time `json:"CreatedAt,omitempty"`
    FailureReason *FailureReasonEnum `json:"FailureReason,omitempty"`
    KeyStorageSecurityStandard *KeyStorageSecurityStandardEnum `json:"KeyStorageSecurityStandard,omitempty"`
    LastStateChangeAt *time.Time `json:"LastStateChangeAt,omitempty"`
    NotAfter *time.Time `json:"NotAfter,omitempty"`
    NotBefore *time.Time `json:"NotBefore,omitempty"`
    OwnerAccount *string `json:"OwnerAccount,omitempty"`
    RestorableUntil *time.Time `json:"RestorableUntil,omitempty"`
    RevocationConfiguration *RevocationConfiguration `json:"RevocationConfiguration,omitempty"`
    Serial *string `json:"Serial,omitempty"`
    Status *CertificateAuthorityStatusEnum `json:"Status,omitempty"`
    Type *CertificateAuthorityTypeEnum `json:"Type,omitempty"`
    
}

