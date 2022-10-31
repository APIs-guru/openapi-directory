package shared

type CompatibilityEnum string

const (
	CompatibilityEnumEc2      CompatibilityEnum = "EC2"
	CompatibilityEnumFargate  CompatibilityEnum = "FARGATE"
	CompatibilityEnumExternal CompatibilityEnum = "EXTERNAL"
)
