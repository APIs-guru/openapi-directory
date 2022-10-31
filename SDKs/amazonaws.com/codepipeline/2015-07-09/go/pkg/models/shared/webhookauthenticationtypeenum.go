package shared




type WebhookAuthenticationTypeEnum string

const (
    WebhookAuthenticationTypeEnumGithubHmac WebhookAuthenticationTypeEnum = "GITHUB_HMAC"
WebhookAuthenticationTypeEnumIP WebhookAuthenticationTypeEnum = "IP"
WebhookAuthenticationTypeEnumUnauthenticated WebhookAuthenticationTypeEnum = "UNAUTHENTICATED"
)


