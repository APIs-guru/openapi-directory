package shared

type IntegrationTypeEnum string

const (
	IntegrationTypeEnumAws       IntegrationTypeEnum = "AWS"
	IntegrationTypeEnumHTTP      IntegrationTypeEnum = "HTTP"
	IntegrationTypeEnumMock      IntegrationTypeEnum = "MOCK"
	IntegrationTypeEnumHTTPProxy IntegrationTypeEnum = "HTTP_PROXY"
	IntegrationTypeEnumAwsProxy  IntegrationTypeEnum = "AWS_PROXY"
)
