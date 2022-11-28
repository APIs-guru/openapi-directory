package shared

type VerificationStatusEnum string

const (
	VerificationStatusEnumPending          VerificationStatusEnum = "Pending"
	VerificationStatusEnumSuccess          VerificationStatusEnum = "Success"
	VerificationStatusEnumFailed           VerificationStatusEnum = "Failed"
	VerificationStatusEnumTemporaryFailure VerificationStatusEnum = "TemporaryFailure"
	VerificationStatusEnumNotStarted       VerificationStatusEnum = "NotStarted"
)
