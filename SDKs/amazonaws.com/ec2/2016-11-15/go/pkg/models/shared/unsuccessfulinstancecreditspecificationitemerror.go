package shared

// UnsuccessfulInstanceCreditSpecificationItemError
// Information about the error for the burstable performance instance whose credit option for CPU usage was not modified.
type UnsuccessfulInstanceCreditSpecificationItemError struct {
	Code    *UnsuccessfulInstanceCreditSpecificationErrorCodeEnum
	Message *string
}
