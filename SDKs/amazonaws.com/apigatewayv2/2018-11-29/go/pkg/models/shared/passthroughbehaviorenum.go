package shared

type PassthroughBehaviorEnum string

const (
	PassthroughBehaviorEnumWhenNoMatch     PassthroughBehaviorEnum = "WHEN_NO_MATCH"
	PassthroughBehaviorEnumNever           PassthroughBehaviorEnum = "NEVER"
	PassthroughBehaviorEnumWhenNoTemplates PassthroughBehaviorEnum = "WHEN_NO_TEMPLATES"
)
