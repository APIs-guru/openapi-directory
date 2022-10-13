package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeScriptXAmzTargetEnum string

const (
	DescribeScriptXAmzTargetEnumGameLiftDescribeScript DescribeScriptXAmzTargetEnum = "GameLift.DescribeScript"
)

type DescribeScriptHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeScriptXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeScriptRequest struct {
	Headers DescribeScriptHeaders
	Request shared.DescribeScriptInput `request:"mediaType=application/json"`
}

type DescribeScriptResponse struct {
	ContentType              string
	DescribeScriptOutput     *shared.DescribeScriptOutput
	InternalServiceException *interface{}
	InvalidRequestException  *interface{}
	NotFoundException        *interface{}
	StatusCode               int64
	UnauthorizedException    *interface{}
}
