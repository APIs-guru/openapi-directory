package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteFacetHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
	XAmzDataPartition string  `header:"name=x-amz-data-partition"`
}

type DeleteFacetRequestBody struct {
	Name string `json:"Name"`
}

type DeleteFacetRequest struct {
	Headers DeleteFacetHeaders
	Request DeleteFacetRequestBody `request:"mediaType=application/json"`
}

type DeleteFacetResponse struct {
	AccessDeniedException      *shared.AccessDeniedException
	ContentType                string
	DeleteFacetResponse        map[string]interface{}
	FacetInUseException        *shared.FacetInUseException
	FacetNotFoundException     *shared.FacetNotFoundException
	InternalServiceException   *shared.InternalServiceException
	InvalidArnException        *shared.InvalidArnException
	LimitExceededException     *shared.LimitExceededException
	ResourceNotFoundException  *shared.ResourceNotFoundException
	RetryableConflictException *shared.RetryableConflictException
	StatusCode                 int64
	ValidationException        *shared.ValidationException
}
