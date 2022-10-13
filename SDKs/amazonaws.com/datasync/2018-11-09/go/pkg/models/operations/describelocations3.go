package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeLocationS3XAmzTargetEnum string

const (
	DescribeLocationS3XAmzTargetEnumFmrsServiceDescribeLocationS3 DescribeLocationS3XAmzTargetEnum = "FmrsService.DescribeLocationS3"
)

type DescribeLocationS3Headers struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeLocationS3XAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeLocationS3Request struct {
	Headers DescribeLocationS3Headers
	Request shared.DescribeLocationS3Request `request:"mediaType=application/json"`
}

type DescribeLocationS3Response struct {
	ContentType                string
	DescribeLocationS3Response *shared.DescribeLocationS3Response
	InternalException          *interface{}
	InvalidRequestException    *interface{}
	StatusCode                 int64
}
