package shared

import (
	"time"
)

// TransferData
// Data used to transfer a certificate to an Amazon Web Services account.
type TransferData struct {
	AcceptDate      *time.Time `json:"acceptDate,omitempty"`
	RejectDate      *time.Time `json:"rejectDate,omitempty"`
	RejectReason    *string    `json:"rejectReason,omitempty"`
	TransferDate    *time.Time `json:"transferDate,omitempty"`
	TransferMessage *string    `json:"transferMessage,omitempty"`
}
