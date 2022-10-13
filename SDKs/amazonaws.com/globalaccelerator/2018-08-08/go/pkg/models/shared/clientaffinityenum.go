package shared

type ClientAffinityEnum string

const (
	ClientAffinityEnumNone     ClientAffinityEnum = "NONE"
	ClientAffinityEnumSourceIP ClientAffinityEnum = "SOURCE_IP"
)
