package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeScriptXAmzTargetEnum string

const (
	DescribeScriptXAmzTargetEnumGameLiftDescribeScript DescribeScriptXAmzTargetEnum = "GameLift.DescribeScript"
)

type DescribeScriptHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeScriptXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
