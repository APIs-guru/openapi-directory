package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeLocationNfsXAmzTargetEnum string

const (
	DescribeLocationNfsXAmzTargetEnumFmrsServiceDescribeLocationNfs DescribeLocationNfsXAmzTargetEnum = "FmrsService.DescribeLocationNfs"
)

type DescribeLocationNfsHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeLocationNfsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeLocationNfsRequest struct {
	Headers DescribeLocationNfsHeaders
	Request shared.DescribeLocationNfsRequest `request:"mediaType=application/json"`
}

type DescribeLocationNfsResponse struct {
	ContentType                 string
	DescribeLocationNfsResponse *shared.DescribeLocationNfsResponse
	InternalException           *interface{}
	InvalidRequestException     *interface{}
	StatusCode                  int64
}
