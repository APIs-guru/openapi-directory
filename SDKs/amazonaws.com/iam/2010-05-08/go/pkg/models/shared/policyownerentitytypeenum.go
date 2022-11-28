package shared

type PolicyOwnerEntityTypeEnum string

const (
	PolicyOwnerEntityTypeEnumUser  PolicyOwnerEntityTypeEnum = "USER"
	PolicyOwnerEntityTypeEnumRole  PolicyOwnerEntityTypeEnum = "ROLE"
	PolicyOwnerEntityTypeEnumGroup PolicyOwnerEntityTypeEnum = "GROUP"
)
