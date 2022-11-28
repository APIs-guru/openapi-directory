package shared

type TenancyEnum string

const (
	TenancyEnumDefault   TenancyEnum = "default"
	TenancyEnumDedicated TenancyEnum = "dedicated"
	TenancyEnumHost      TenancyEnum = "host"
)
