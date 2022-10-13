package shared

import (
	"time"
)

type TransferData struct {
	AcceptDate      *time.Time `json:"acceptDate"`
	RejectDate      *time.Time `json:"rejectDate"`
	RejectReason    *string    `json:"rejectReason"`
	TransferDate    *time.Time `json:"transferDate"`
	TransferMessage *string    `json:"transferMessage"`
}
