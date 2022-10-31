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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
	InsecureSkipVerification *bool `json:"insecureSkipVerification,omitempty"`
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
	CacheKeyParameters  []string                                      `json:"cacheKeyParameters,omitempty"`
	CacheNamespace      *string                                       `json:"cacheNamespace,omitempty"`
	ConnectionID        *string                                       `json:"connectionId,omitempty"`
	ConnectionType      *PutIntegrationRequestBodyConnectionTypeEnum  `json:"connectionType,omitempty"`
	ContentHandling     *PutIntegrationRequestBodyContentHandlingEnum `json:"contentHandling,omitempty"`
	Credentials         *string                                       `json:"credentials,omitempty"`
	HTTPMethod          *string                                       `json:"httpMethod,omitempty"`
	PassthroughBehavior *string                                       `json:"passthroughBehavior,omitempty"`
	RequestParameters   map[string]string                             `json:"requestParameters,omitempty"`
	RequestTemplates    map[string]string                             `json:"requestTemplates,omitempty"`
	TimeoutInMillis     *int64                                        `json:"timeoutInMillis,omitempty"`
	TLSConfig           *PutIntegrationRequestBodyTLSConfig           `json:"tlsConfig,omitempty"`
	Type                PutIntegrationRequestBodyTypeEnum             `json:"type"`
	URI                 *string                                       `json:"uri,omitempty"`
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
