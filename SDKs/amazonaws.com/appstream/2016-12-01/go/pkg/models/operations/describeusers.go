package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeUsersXAmzTargetEnum string

const (
	DescribeUsersXAmzTargetEnumPhotonAdminProxyServiceDescribeUsers DescribeUsersXAmzTargetEnum = "PhotonAdminProxyService.DescribeUsers"
)

type DescribeUsersHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeUsersXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeUsersRequest struct {
	Headers DescribeUsersHeaders
	Request shared.DescribeUsersRequest `request:"mediaType=application/json"`
}

type DescribeUsersResponse struct {
	ContentType                          string
	DescribeUsersResult                  *shared.DescribeUsersResult
	InvalidParameterCombinationException *interface{}
	ResourceNotFoundException            *interface{}
	StatusCode                           int64
}
