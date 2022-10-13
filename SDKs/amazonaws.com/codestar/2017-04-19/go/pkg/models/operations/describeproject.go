package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeProjectXAmzTargetEnum string

const (
	DescribeProjectXAmzTargetEnumCodeStar20170419DescribeProject DescribeProjectXAmzTargetEnum = "CodeStar_20170419.DescribeProject"
)

type DescribeProjectHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeProjectXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeProjectRequest struct {
	Headers DescribeProjectHeaders
	Request shared.DescribeProjectRequest `request:"mediaType=application/json"`
}

type DescribeProjectResponse struct {
	ConcurrentModificationException *interface{}
	ContentType                     string
	DescribeProjectResult           *shared.DescribeProjectResult
	InvalidServiceRoleException     *interface{}
	ProjectConfigurationException   *interface{}
	ProjectNotFoundException        *interface{}
	StatusCode                      int64
	ValidationException             *interface{}
}
