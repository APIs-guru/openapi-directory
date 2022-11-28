package shared

import (
	"time"
)

// HostReservation
// Details about the Dedicated Host Reservation and associated Dedicated Hosts.
type HostReservation struct {
	Count             *int64
	CurrencyCode      *CurrencyCodeValuesEnum
	Duration          *int64
	End               *time.Time
	HostIDSet         []string
	HostReservationID *string
	HourlyPrice       *string
	InstanceFamily    *string
	OfferingID        *string
	PaymentOption     *PaymentOptionEnum
	Start             *time.Time
	State             *ReservationStateEnum
	Tags              []Tag
	UpfrontPrice      *string
}
