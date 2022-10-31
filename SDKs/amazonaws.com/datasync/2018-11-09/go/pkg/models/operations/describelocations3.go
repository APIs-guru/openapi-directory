package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeLocationS3XAmzTargetEnum string

const (
	DescribeLocationS3XAmzTargetEnumFmrsServiceDescribeLocationS3 DescribeLocationS3XAmzTargetEnum = "FmrsService.DescribeLocationS3"
)

type DescribeLocationS3Headers struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeLocationS3XAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
