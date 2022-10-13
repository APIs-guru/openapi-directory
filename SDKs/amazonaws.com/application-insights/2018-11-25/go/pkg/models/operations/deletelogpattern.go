package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteLogPatternXAmzTargetEnum string

const (
	DeleteLogPatternXAmzTargetEnumEc2WindowsBarleyServiceDeleteLogPattern DeleteLogPatternXAmzTargetEnum = "EC2WindowsBarleyService.DeleteLogPattern"
)

type DeleteLogPatternHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteLogPatternXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteLogPatternRequest struct {
	Headers DeleteLogPatternHeaders
	Request shared.DeleteLogPatternRequest `request:"mediaType=application/json"`
}

type DeleteLogPatternResponse struct {
	BadRequestException       *interface{}
	ContentType               string
	DeleteLogPatternResponse  map[string]interface{}
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
