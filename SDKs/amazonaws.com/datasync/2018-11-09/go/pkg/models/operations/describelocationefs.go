package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeLocationEfsXAmzTargetEnum string

const (
	DescribeLocationEfsXAmzTargetEnumFmrsServiceDescribeLocationEfs DescribeLocationEfsXAmzTargetEnum = "FmrsService.DescribeLocationEfs"
)

type DescribeLocationEfsHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeLocationEfsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeLocationEfsRequest struct {
	Headers DescribeLocationEfsHeaders
	Request shared.DescribeLocationEfsRequest `request:"mediaType=application/json"`
}

type DescribeLocationEfsResponse struct {
	ContentType                 string
	DescribeLocationEfsResponse *shared.DescribeLocationEfsResponse
	InternalException           *interface{}
	InvalidRequestException     *interface{}
	StatusCode                  int64
}
