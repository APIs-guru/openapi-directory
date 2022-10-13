package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDimensionPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type CreateDimensionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateDimensionRequestBodyTypeEnum string

const (
	CreateDimensionRequestBodyTypeEnumTopicFilter CreateDimensionRequestBodyTypeEnum = "TOPIC_FILTER"
)

type CreateDimensionRequestBody struct {
	ClientRequestToken string                             `json:"clientRequestToken"`
	StringValues       []string                           `json:"stringValues"`
	Tags               []shared.Tag                       `json:"tags"`
	Type               CreateDimensionRequestBodyTypeEnum `json:"type"`
}

type CreateDimensionRequest struct {
	PathParams CreateDimensionPathParams
	Headers    CreateDimensionHeaders
	Request    CreateDimensionRequestBody `request:"mediaType=application/json"`
}

type CreateDimensionResponse struct {
	ContentType                    string
	CreateDimensionResponse        *shared.CreateDimensionResponse
	InternalFailureException       *interface{}
	InvalidRequestException        *interface{}
	LimitExceededException         *interface{}
	ResourceAlreadyExistsException *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
}
