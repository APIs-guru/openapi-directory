package shared

type StateEnum string

const (
	StateEnumPendingAcceptance StateEnum = "PendingAcceptance"
	StateEnumPending           StateEnum = "Pending"
	StateEnumAvailable         StateEnum = "Available"
	StateEnumDeleting          StateEnum = "Deleting"
	StateEnumDeleted           StateEnum = "Deleted"
	StateEnumRejected          StateEnum = "Rejected"
	StateEnumFailed            StateEnum = "Failed"
	StateEnumExpired           StateEnum = "Expired"
)
