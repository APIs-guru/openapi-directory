package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeDeliveryStreamXAmzTargetEnum string

const (
	DescribeDeliveryStreamXAmzTargetEnumFirehose20150804DescribeDeliveryStream DescribeDeliveryStreamXAmzTargetEnum = "Firehose_20150804.DescribeDeliveryStream"
)

type DescribeDeliveryStreamHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeDeliveryStreamXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeDeliveryStreamRequest struct {
	Headers DescribeDeliveryStreamHeaders
	Request shared.DescribeDeliveryStreamInput `request:"mediaType=application/json"`
}

type DescribeDeliveryStreamResponse struct {
	ContentType                  string
	DescribeDeliveryStreamOutput *shared.DescribeDeliveryStreamOutput
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
}
