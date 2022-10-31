package shared




type IntegrationTypeEnum string

const (
    IntegrationTypeEnumHTTP IntegrationTypeEnum = "HTTP"
IntegrationTypeEnumAws IntegrationTypeEnum = "AWS"
IntegrationTypeEnumMock IntegrationTypeEnum = "MOCK"
IntegrationTypeEnumHTTPProxy IntegrationTypeEnum = "HTTP_PROXY"
IntegrationTypeEnumAwsProxy IntegrationTypeEnum = "AWS_PROXY"
)


