package shared

type AuthTypeEnum string

const (
	AuthTypeEnumOauth               AuthTypeEnum = "OAUTH"
	AuthTypeEnumBasicAuth           AuthTypeEnum = "BASIC_AUTH"
	AuthTypeEnumPersonalAccessToken AuthTypeEnum = "PERSONAL_ACCESS_TOKEN"
)
