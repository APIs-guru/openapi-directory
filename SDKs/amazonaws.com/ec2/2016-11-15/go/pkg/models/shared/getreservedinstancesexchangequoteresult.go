package shared

import (
	"time"
)

// GetReservedInstancesExchangeQuoteResult
// Contains the output of GetReservedInstancesExchangeQuote.
type GetReservedInstancesExchangeQuoteResult struct {
	CurrencyCode                        *string
	IsValidExchange                     *bool
	OutputReservedInstancesWillExpireAt *time.Time
	PaymentDue                          *string
	ReservedInstanceValueRollup         *ReservationValue
	ReservedInstanceValueSet            []ReservedInstanceReservationValue
	TargetConfigurationValueRollup      *ReservationValue
	TargetConfigurationValueSet         []TargetReservationValue
	ValidationFailureReason             *string
}
