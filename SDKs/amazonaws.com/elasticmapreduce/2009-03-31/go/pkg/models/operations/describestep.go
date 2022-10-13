package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeStepXAmzTargetEnum string

const (
	DescribeStepXAmzTargetEnumElasticMapReduceDescribeStep DescribeStepXAmzTargetEnum = "ElasticMapReduce.DescribeStep"
)

type DescribeStepHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeStepXAmzTargetEnum `header:"name=X-Amz-Target"`
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
