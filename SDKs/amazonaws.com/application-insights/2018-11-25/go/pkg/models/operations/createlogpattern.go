package operations

import (
	"openapi/pkg/models/shared"
)

type CreateLogPatternXAmzTargetEnum string

const (
	CreateLogPatternXAmzTargetEnumEc2WindowsBarleyServiceCreateLogPattern CreateLogPatternXAmzTargetEnum = "EC2WindowsBarleyService.CreateLogPattern"
)

type CreateLogPatternHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateLogPatternXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateLogPatternRequest struct {
	Headers CreateLogPatternHeaders
	Request shared.CreateLogPatternRequest `request:"mediaType=application/json"`
}

type CreateLogPatternResponse struct {
	ContentType               string
	CreateLogPatternResponse  *shared.CreateLogPatternResponse
	InternalServerException   *interface{}
	ResourceInUseException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
