package shared

type APIKeySourceTypeEnum string

const (
	APIKeySourceTypeEnumHeader     APIKeySourceTypeEnum = "HEADER"
	APIKeySourceTypeEnumAuthorizer APIKeySourceTypeEnum = "AUTHORIZER"
)
