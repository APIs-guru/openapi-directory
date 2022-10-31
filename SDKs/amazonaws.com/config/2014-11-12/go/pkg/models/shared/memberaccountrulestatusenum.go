package shared

type MemberAccountRuleStatusEnum string

const (
	MemberAccountRuleStatusEnumCreateSuccessful MemberAccountRuleStatusEnum = "CREATE_SUCCESSFUL"
	MemberAccountRuleStatusEnumCreateInProgress MemberAccountRuleStatusEnum = "CREATE_IN_PROGRESS"
	MemberAccountRuleStatusEnumCreateFailed     MemberAccountRuleStatusEnum = "CREATE_FAILED"
	MemberAccountRuleStatusEnumDeleteSuccessful MemberAccountRuleStatusEnum = "DELETE_SUCCESSFUL"
	MemberAccountRuleStatusEnumDeleteFailed     MemberAccountRuleStatusEnum = "DELETE_FAILED"
	MemberAccountRuleStatusEnumDeleteInProgress MemberAccountRuleStatusEnum = "DELETE_IN_PROGRESS"
	MemberAccountRuleStatusEnumUpdateSuccessful MemberAccountRuleStatusEnum = "UPDATE_SUCCESSFUL"
	MemberAccountRuleStatusEnumUpdateInProgress MemberAccountRuleStatusEnum = "UPDATE_IN_PROGRESS"
	MemberAccountRuleStatusEnumUpdateFailed     MemberAccountRuleStatusEnum = "UPDATE_FAILED"
)
