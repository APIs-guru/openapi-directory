package shared

type Ec2TagFilterTypeEnum string

const (
	Ec2TagFilterTypeEnumKeyOnly     Ec2TagFilterTypeEnum = "KEY_ONLY"
	Ec2TagFilterTypeEnumValueOnly   Ec2TagFilterTypeEnum = "VALUE_ONLY"
	Ec2TagFilterTypeEnumKeyAndValue Ec2TagFilterTypeEnum = "KEY_AND_VALUE"
)
