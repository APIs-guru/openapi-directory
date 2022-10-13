package operations

import (
	"openapi/pkg/models/shared"
)

type DetachObjectHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
	XAmzDataPartition string  `header:"name=x-amz-data-partition"`
}

type DetachObjectRequestBodyParentReference struct {
	Selector *string `json:"Selector"`
}

type DetachObjectRequestBody struct {
	LinkName        string                                 `json:"LinkName"`
	ParentReference DetachObjectRequestBodyParentReference `json:"ParentReference"`
}

type DetachObjectRequest struct {
	Headers DetachObjectHeaders
	Request DetachObjectRequestBody `request:"mediaType=application/json"`
}

type DetachObjectResponse struct {
	AccessDeniedException        *shared.AccessDeniedException
	ContentType                  string
	DetachObjectResponse         *shared.DetachObjectResponse
	DirectoryNotEnabledException *shared.DirectoryNotEnabledException
	InternalServiceException     *shared.InternalServiceException
	InvalidArnException          *shared.InvalidArnException
	LimitExceededException       *shared.LimitExceededException
	NotNodeException             *shared.NotNodeException
	ResourceNotFoundException    *shared.ResourceNotFoundException
	RetryableConflictException   *shared.RetryableConflictException
	StatusCode                   int64
	ValidationException          *shared.ValidationException
}
