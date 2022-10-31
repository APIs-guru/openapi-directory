package shared




type ConnectionAuthorizationTypeEnum string

const (
    ConnectionAuthorizationTypeEnumBasic ConnectionAuthorizationTypeEnum = "BASIC"
ConnectionAuthorizationTypeEnumOauthClientCredentials ConnectionAuthorizationTypeEnum = "OAUTH_CLIENT_CREDENTIALS"
ConnectionAuthorizationTypeEnumAPIKey ConnectionAuthorizationTypeEnum = "API_KEY"
)


