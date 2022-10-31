package shared

type MemberStatusEnum string

const (
	MemberStatusEnumInvited                MemberStatusEnum = "INVITED"
	MemberStatusEnumVerificationInProgress MemberStatusEnum = "VERIFICATION_IN_PROGRESS"
	MemberStatusEnumVerificationFailed     MemberStatusEnum = "VERIFICATION_FAILED"
	MemberStatusEnumEnabled                MemberStatusEnum = "ENABLED"
	MemberStatusEnumAcceptedButDisabled    MemberStatusEnum = "ACCEPTED_BUT_DISABLED"
)
