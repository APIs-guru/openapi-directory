package shared

import (
	"time"
)

type CertificateDescription struct {
	CaCertificateID  *string                `json:"caCertificateId"`
	CertificateArn   *string                `json:"certificateArn"`
	CertificateID    *string                `json:"certificateId"`
	CertificateMode  *CertificateModeEnum   `json:"certificateMode"`
	CertificatePem   *string                `json:"certificatePem"`
	CreationDate     *time.Time             `json:"creationDate"`
	CustomerVersion  *int64                 `json:"customerVersion"`
	GenerationID     *string                `json:"generationId"`
	LastModifiedDate *time.Time             `json:"lastModifiedDate"`
	OwnedBy          *string                `json:"ownedBy"`
	PreviousOwnedBy  *string                `json:"previousOwnedBy"`
	Status           *CertificateStatusEnum `json:"status"`
	TransferData     *TransferData          `json:"transferData"`
	Validity         *CertificateValidity   `json:"validity"`
}
