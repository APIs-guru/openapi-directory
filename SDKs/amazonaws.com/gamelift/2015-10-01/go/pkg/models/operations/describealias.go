package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeAliasXAmzTargetEnum string

const (
	DescribeAliasXAmzTargetEnumGameLiftDescribeAlias DescribeAliasXAmzTargetEnum = "GameLift.DescribeAlias"
)

type DescribeAliasHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeAliasXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeAliasRequest struct {
	Headers DescribeAliasHeaders
	Request shared.DescribeAliasInput `request:"mediaType=application/json"`
}

type DescribeAliasResponse struct {
	ContentType              string
	DescribeAliasOutput      *shared.DescribeAliasOutput
	InternalServiceException *interface{}
	InvalidRequestException  *interface{}
	NotFoundException        *interface{}
	StatusCode               int64
	UnauthorizedException    *interface{}
}
