package shared

type DNSNameStateEnum string

const (
	DNSNameStateEnumPendingVerification DNSNameStateEnum = "pendingVerification"
	DNSNameStateEnumVerified            DNSNameStateEnum = "verified"
	DNSNameStateEnumFailed              DNSNameStateEnum = "failed"
)
