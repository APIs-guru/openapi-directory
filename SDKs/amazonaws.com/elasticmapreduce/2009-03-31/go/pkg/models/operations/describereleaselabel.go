package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeReleaseLabelXAmzTargetEnum string

const (
	DescribeReleaseLabelXAmzTargetEnumElasticMapReduceDescribeReleaseLabel DescribeReleaseLabelXAmzTargetEnum = "ElasticMapReduce.DescribeReleaseLabel"
)

type DescribeReleaseLabelHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeReleaseLabelXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
