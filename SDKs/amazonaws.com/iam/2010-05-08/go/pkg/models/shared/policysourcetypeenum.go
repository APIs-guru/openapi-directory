package shared

type PolicySourceTypeEnum string

const (
	PolicySourceTypeEnumUser        PolicySourceTypeEnum = "user"
	PolicySourceTypeEnumGroup       PolicySourceTypeEnum = "group"
	PolicySourceTypeEnumRole        PolicySourceTypeEnum = "role"
	PolicySourceTypeEnumAwsManaged  PolicySourceTypeEnum = "aws-managed"
	PolicySourceTypeEnumUserManaged PolicySourceTypeEnum = "user-managed"
	PolicySourceTypeEnumResource    PolicySourceTypeEnum = "resource"
	PolicySourceTypeEnumNone        PolicySourceTypeEnum = "none"
)
