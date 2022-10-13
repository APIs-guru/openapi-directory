package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeReleaseLabelXAmzTargetEnum string

const (
	DescribeReleaseLabelXAmzTargetEnumElasticMapReduceDescribeReleaseLabel DescribeReleaseLabelXAmzTargetEnum = "ElasticMapReduce.DescribeReleaseLabel"
)

type DescribeReleaseLabelHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeReleaseLabelXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeReleaseLabelRequest struct {
	Headers DescribeReleaseLabelHeaders
	Request shared.DescribeReleaseLabelInput `request:"mediaType=application/json"`
}

type DescribeReleaseLabelResponse struct {
	ContentType                string
	DescribeReleaseLabelOutput *shared.DescribeReleaseLabelOutput
	InternalServerException    *interface{}
	InvalidRequestException    *interface{}
	StatusCode                 int64
}
