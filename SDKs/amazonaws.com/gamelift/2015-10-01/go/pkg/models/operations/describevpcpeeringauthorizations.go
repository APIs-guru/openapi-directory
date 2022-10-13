package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeVpcPeeringAuthorizationsXAmzTargetEnum string

const (
	DescribeVpcPeeringAuthorizationsXAmzTargetEnumGameLiftDescribeVpcPeeringAuthorizations DescribeVpcPeeringAuthorizationsXAmzTargetEnum = "GameLift.DescribeVpcPeeringAuthorizations"
)

type DescribeVpcPeeringAuthorizationsHeaders struct {
	XAmzAlgorithm     *string                                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeVpcPeeringAuthorizationsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeVpcPeeringAuthorizationsRequest struct {
	Headers DescribeVpcPeeringAuthorizationsHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type DescribeVpcPeeringAuthorizationsResponse struct {
	ContentType                            string
	DescribeVpcPeeringAuthorizationsOutput *shared.DescribeVpcPeeringAuthorizationsOutput
	InternalServiceException               *interface{}
	InvalidRequestException                *interface{}
	StatusCode                             int64
	UnauthorizedException                  *interface{}
}
