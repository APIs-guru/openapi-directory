package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeStepXAmzTargetEnum string

const (
	DescribeStepXAmzTargetEnumElasticMapReduceDescribeStep DescribeStepXAmzTargetEnum = "ElasticMapReduce.DescribeStep"
)

type DescribeStepHeaders struct {
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeStepXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeStepRequest struct {
	Headers DescribeStepHeaders
	Request shared.DescribeStepInput `request:"mediaType=application/json"`
}

type DescribeStepResponse struct {
	ContentType             string
	DescribeStepOutput      *shared.DescribeStepOutput
	InternalServerException *interface{}
	InvalidRequestException *interface{}
	StatusCode              int64
}
