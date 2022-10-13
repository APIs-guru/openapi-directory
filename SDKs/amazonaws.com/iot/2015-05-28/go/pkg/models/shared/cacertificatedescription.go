package shared

import (
	"time"
)

type CaCertificateDescription struct {
	AutoRegistrationStatus *AutoRegistrationStatusEnum `json:"autoRegistrationStatus"`
	CertificateArn         *string                     `json:"certificateArn"`
	CertificateID          *string                     `json:"certificateId"`
	CertificatePem         *string                     `json:"certificatePem"`
	CreationDate           *time.Time                  `json:"creationDate"`
	CustomerVersion        *int64                      `json:"customerVersion"`
	GenerationID           *string                     `json:"generationId"`
	LastModifiedDate       *time.Time                  `json:"lastModifiedDate"`
	OwnedBy                *string                     `json:"ownedBy"`
	Status                 *CaCertificateStatusEnum    `json:"status"`
	Validity               *CertificateValidity        `json:"validity"`
}
