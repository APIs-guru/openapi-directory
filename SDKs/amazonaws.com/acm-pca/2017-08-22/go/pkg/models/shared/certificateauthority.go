package shared

import (
	"time"
)

type CertificateAuthority struct {
	Arn                               *string                            `json:"Arn"`
	CertificateAuthorityConfiguration *CertificateAuthorityConfiguration `json:"CertificateAuthorityConfiguration"`
	CreatedAt                         *time.Time                         `json:"CreatedAt"`
	FailureReason                     *FailureReasonEnum                 `json:"FailureReason"`
	KeyStorageSecurityStandard        *KeyStorageSecurityStandardEnum    `json:"KeyStorageSecurityStandard"`
	LastStateChangeAt                 *time.Time                         `json:"LastStateChangeAt"`
	NotAfter                          *time.Time                         `json:"NotAfter"`
	NotBefore                         *time.Time                         `json:"NotBefore"`
	OwnerAccount                      *string                            `json:"OwnerAccount"`
	RestorableUntil                   *time.Time                         `json:"RestorableUntil"`
	RevocationConfiguration           *RevocationConfiguration           `json:"RevocationConfiguration"`
	Serial                            *string                            `json:"Serial"`
	Status                            *CertificateAuthorityStatusEnum    `json:"Status"`
	Type                              *CertificateAuthorityTypeEnum      `json:"Type"`
}
