package shared

import (
	"time"
)

type OutgoingCertificate struct {
	CertificateArn  *string    `json:"certificateArn"`
	CertificateID   *string    `json:"certificateId"`
	CreationDate    *time.Time `json:"creationDate"`
	TransferDate    *time.Time `json:"transferDate"`
	TransferMessage *string    `json:"transferMessage"`
	TransferredTo   *string    `json:"transferredTo"`
}
