package shared

type AutomaticFailoverStatusEnum string

const (
	AutomaticFailoverStatusEnumEnabled   AutomaticFailoverStatusEnum = "enabled"
	AutomaticFailoverStatusEnumDisabled  AutomaticFailoverStatusEnum = "disabled"
	AutomaticFailoverStatusEnumEnabling  AutomaticFailoverStatusEnum = "enabling"
	AutomaticFailoverStatusEnumDisabling AutomaticFailoverStatusEnum = "disabling"
)
