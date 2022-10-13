package shared

type NetworkModeEnum string

const (
	NetworkModeEnumBridge NetworkModeEnum = "bridge"
	NetworkModeEnumHost   NetworkModeEnum = "host"
	NetworkModeEnumAwsvpc NetworkModeEnum = "awsvpc"
	NetworkModeEnumNone   NetworkModeEnum = "none"
)
