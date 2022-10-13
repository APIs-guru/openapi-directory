package operations

import (
	"openapi/pkg/models/shared"
)

type GetTypedLinkFacetInformationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
	XAmzDataPartition string  `header:"name=x-amz-data-partition"`
}

type GetTypedLinkFacetInformationRequestBody struct {
	Name string `json:"Name"`
}

type GetTypedLinkFacetInformationRequest struct {
	Headers GetTypedLinkFacetInformationHeaders
	Request GetTypedLinkFacetInformationRequestBody `request:"mediaType=application/json"`
}

type GetTypedLinkFacetInformationResponse struct {
	AccessDeniedException                *interface{}
	ContentType                          string
	FacetNotFoundException               *interface{}
	GetTypedLinkFacetInformationResponse *shared.GetTypedLinkFacetInformationResponse
	InternalServiceException             *interface{}
	InvalidArnException                  *interface{}
	InvalidNextTokenException            *interface{}
	LimitExceededException               *interface{}
	ResourceNotFoundException            *interface{}
	RetryableConflictException           *interface{}
	StatusCode                           int64
	ValidationException                  *interface{}
}
