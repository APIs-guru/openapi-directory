package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeAgentXAmzTargetEnum string

const (
	DescribeAgentXAmzTargetEnumFmrsServiceDescribeAgent DescribeAgentXAmzTargetEnum = "FmrsService.DescribeAgent"
)

type DescribeAgentHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeAgentXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeAgentRequest struct {
	Headers DescribeAgentHeaders
	Request shared.DescribeAgentRequest `request:"mediaType=application/json"`
}

type DescribeAgentResponse struct {
	ContentType             string
	DescribeAgentResponse   *shared.DescribeAgentResponse
	InternalException       *interface{}
	InvalidRequestException *interface{}
	StatusCode              int64
}
