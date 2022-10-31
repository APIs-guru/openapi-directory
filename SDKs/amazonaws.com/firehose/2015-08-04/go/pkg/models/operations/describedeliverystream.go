package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeDeliveryStreamXAmzTargetEnum string

const (
	DescribeDeliveryStreamXAmzTargetEnumFirehose20150804DescribeDeliveryStream DescribeDeliveryStreamXAmzTargetEnum = "Firehose_20150804.DescribeDeliveryStream"
)

type DescribeDeliveryStreamHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeDeliveryStreamXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
