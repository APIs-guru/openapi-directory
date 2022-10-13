package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeUserXAmzTargetEnum string

const (
	DescribeUserXAmzTargetEnumAwsIdentityStoreDescribeUser DescribeUserXAmzTargetEnum = "AWSIdentityStore.DescribeUser"
)

type DescribeUserHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeUserXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeUserRequest struct {
	Headers DescribeUserHeaders
	Request shared.DescribeUserRequest `request:"mediaType=application/json"`
}

type DescribeUserResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	DescribeUserResponse      *shared.DescribeUserResponse
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
