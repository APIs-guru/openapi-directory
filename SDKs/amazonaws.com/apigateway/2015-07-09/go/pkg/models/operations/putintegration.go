package operations

import (
	"openapi/pkg/models/shared"
)

type PutIntegrationPathParams struct {
	HTTPMethod string `pathParam:"style=simple,explode=false,name=http_method"`
	ResourceID string `pathParam:"style=simple,explode=false,name=resource_id"`
	RestapiID  string `pathParam:"style=simple,explode=false,name=restapi_id"`
}

type PutIntegrationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PutIntegrationRequestBodyConnectionTypeEnum string

const (
	PutIntegrationRequestBodyConnectionTypeEnumInternet PutIntegrationRequestBodyConnectionTypeEnum = "INTERNET"
	PutIntegrationRequestBodyConnectionTypeEnumVpcLink  PutIntegrationRequestBodyConnectionTypeEnum = "VPC_LINK"
)

type PutIntegrationRequestBodyContentHandlingEnum string

const (
	PutIntegrationRequestBodyContentHandlingEnumConvertToBinary PutIntegrationRequestBodyContentHandlingEnum = "CONVERT_TO_BINARY"
	PutIntegrationRequestBodyContentHandlingEnumConvertToText   PutIntegrationRequestBodyContentHandlingEnum = "CONVERT_TO_TEXT"
)

type PutIntegrationRequestBodyTLSConfig struct {
	InsecureSkipVerification *bool `json:"insecureSkipVerification"`
}

type PutIntegrationRequestBodyTypeEnum string

const (
	PutIntegrationRequestBodyTypeEnumHTTP      PutIntegrationRequestBodyTypeEnum = "HTTP"
	PutIntegrationRequestBodyTypeEnumAws       PutIntegrationRequestBodyTypeEnum = "AWS"
	PutIntegrationRequestBodyTypeEnumMock      PutIntegrationRequestBodyTypeEnum = "MOCK"
	PutIntegrationRequestBodyTypeEnumHTTPProxy PutIntegrationRequestBodyTypeEnum = "HTTP_PROXY"
	PutIntegrationRequestBodyTypeEnumAwsProxy  PutIntegrationRequestBodyTypeEnum = "AWS_PROXY"
)

type PutIntegrationRequestBody struct {
	CacheKeyParameters  []string                                      `json:"cacheKeyParameters"`
	CacheNamespace      *string                                       `json:"cacheNamespace"`
	ConnectionID        *string                                       `json:"connectionId"`
	ConnectionType      *PutIntegrationRequestBodyConnectionTypeEnum  `json:"connectionType"`
	ContentHandling     *PutIntegrationRequestBodyContentHandlingEnum `json:"contentHandling"`
	Credentials         *string                                       `json:"credentials"`
	HTTPMethod          *string                                       `json:"httpMethod"`
	PassthroughBehavior *string                                       `json:"passthroughBehavior"`
	RequestParameters   map[string]string                             `json:"requestParameters"`
	RequestTemplates    map[string]string                             `json:"requestTemplates"`
	TimeoutInMillis     *int64                                        `json:"timeoutInMillis"`
	TLSConfig           *PutIntegrationRequestBodyTLSConfig           `json:"tlsConfig"`
	Type                PutIntegrationRequestBodyTypeEnum             `json:"type"`
	URI                 *string                                       `json:"uri"`
}

type PutIntegrationRequest struct {
	PathParams PutIntegrationPathParams
	Headers    PutIntegrationHeaders
	Request    PutIntegrationRequestBody `request:"mediaType=application/json"`
}

type PutIntegrationResponse struct {
	BadRequestException      *interface{}
	ConflictException        *interface{}
	ContentType              string
	Integration              *shared.Integration
	LimitExceededException   *interface{}
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
	UnauthorizedException    *interface{}
}
