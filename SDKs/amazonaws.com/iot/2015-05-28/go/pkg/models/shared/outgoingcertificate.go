package shared

import (
	"time"
)

// OutgoingCertificate
// A certificate that has been transferred but not yet accepted.
type OutgoingCertificate struct {
	CertificateArn  *string    `json:"certificateArn,omitempty"`
	CertificateID   *string    `json:"certificateId,omitempty"`
	CreationDate    *time.Time `json:"creationDate,omitempty"`
	TransferDate    *time.Time `json:"transferDate,omitempty"`
	TransferMessage *string    `json:"transferMessage,omitempty"`
	TransferredTo   *string    `json:"transferredTo,omitempty"`
}
