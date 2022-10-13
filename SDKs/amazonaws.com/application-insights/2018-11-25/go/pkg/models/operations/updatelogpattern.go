package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateLogPatternXAmzTargetEnum string

const (
	UpdateLogPatternXAmzTargetEnumEc2WindowsBarleyServiceUpdateLogPattern UpdateLogPatternXAmzTargetEnum = "EC2WindowsBarleyService.UpdateLogPattern"
)

type UpdateLogPatternHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateLogPatternXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateLogPatternRequest struct {
	Headers UpdateLogPatternHeaders
	Request shared.UpdateLogPatternRequest `request:"mediaType=application/json"`
}

type UpdateLogPatternResponse struct {
	ContentType               string
	InternalServerException   *interface{}
	ResourceInUseException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	UpdateLogPatternResponse  *shared.UpdateLogPatternResponse
	ValidationException       *interface{}
}
