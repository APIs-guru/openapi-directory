package shared

type RedisAuthTypeValueEnum string

const (
	RedisAuthTypeValueEnumNone      RedisAuthTypeValueEnum = "none"
	RedisAuthTypeValueEnumAuthRole  RedisAuthTypeValueEnum = "auth-role"
	RedisAuthTypeValueEnumAuthToken RedisAuthTypeValueEnum = "auth-token"
)
