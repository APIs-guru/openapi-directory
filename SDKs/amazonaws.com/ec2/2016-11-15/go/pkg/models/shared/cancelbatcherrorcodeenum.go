package shared

type CancelBatchErrorCodeEnum string

const (
	CancelBatchErrorCodeEnumFleetRequestIDDoesNotExist        CancelBatchErrorCodeEnum = "fleetRequestIdDoesNotExist"
	CancelBatchErrorCodeEnumFleetRequestIDMalformed           CancelBatchErrorCodeEnum = "fleetRequestIdMalformed"
	CancelBatchErrorCodeEnumFleetRequestNotInCancellableState CancelBatchErrorCodeEnum = "fleetRequestNotInCancellableState"
	CancelBatchErrorCodeEnumUnexpectedError                   CancelBatchErrorCodeEnum = "unexpectedError"
)
