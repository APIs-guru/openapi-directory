package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeLocationSmbXAmzTargetEnum string

const (
	DescribeLocationSmbXAmzTargetEnumFmrsServiceDescribeLocationSmb DescribeLocationSmbXAmzTargetEnum = "FmrsService.DescribeLocationSmb"
)

type DescribeLocationSmbHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeLocationSmbXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeLocationSmbRequest struct {
	Headers DescribeLocationSmbHeaders
	Request shared.DescribeLocationSmbRequest `request:"mediaType=application/json"`
}

type DescribeLocationSmbResponse struct {
	ContentType                 string
	DescribeLocationSmbResponse *shared.DescribeLocationSmbResponse
	InternalException           *interface{}
	InvalidRequestException     *interface{}
	StatusCode                  int64
}
