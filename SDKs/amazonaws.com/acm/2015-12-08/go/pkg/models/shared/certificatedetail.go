package shared

import (
"time")

type CertificateDetail struct {
    CertificateArn *string `json:"CertificateArn,omitempty"`
    CertificateAuthorityArn *string `json:"CertificateAuthorityArn,omitempty"`
    CreatedAt *time.Time `json:"CreatedAt,omitempty"`
    DomainName *string `json:"DomainName,omitempty"`
    DomainValidationOptions []DomainValidation `json:"DomainValidationOptions,omitempty"`
    ExtendedKeyUsages []ExtendedKeyUsage `json:"ExtendedKeyUsages,omitempty"`
    FailureReason *FailureReasonEnum `json:"FailureReason,omitempty"`
    ImportedAt *time.Time `json:"ImportedAt,omitempty"`
    InUseBy []string `json:"InUseBy,omitempty"`
    IssuedAt *time.Time `json:"IssuedAt,omitempty"`
    Issuer *string `json:"Issuer,omitempty"`
    KeyAlgorithm *KeyAlgorithmEnum `json:"KeyAlgorithm,omitempty"`
    KeyUsages []KeyUsage `json:"KeyUsages,omitempty"`
    NotAfter *time.Time `json:"NotAfter,omitempty"`
    NotBefore *time.Time `json:"NotBefore,omitempty"`
    Options *CertificateOptions `json:"Options,omitempty"`
    RenewalEligibility *RenewalEligibilityEnum `json:"RenewalEligibility,omitempty"`
    RenewalSummary *RenewalSummary `json:"RenewalSummary,omitempty"`
    RevocationReason *RevocationReasonEnum `json:"RevocationReason,omitempty"`
    RevokedAt *time.Time `json:"RevokedAt,omitempty"`
    Serial *string `json:"Serial,omitempty"`
    SignatureAlgorithm *string `json:"SignatureAlgorithm,omitempty"`
    Status *CertificateStatusEnum `json:"Status,omitempty"`
    Subject *string `json:"Subject,omitempty"`
    SubjectAlternativeNames []string `json:"SubjectAlternativeNames,omitempty"`
    Type *CertificateTypeEnum `json:"Type,omitempty"`
    
}

