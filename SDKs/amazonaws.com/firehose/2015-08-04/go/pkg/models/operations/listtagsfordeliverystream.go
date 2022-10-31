package operations

import (
	"openapi/pkg/models/shared"
)

type ListTagsForDeliveryStreamXAmzTargetEnum string

const (
	ListTagsForDeliveryStreamXAmzTargetEnumFirehose20150804ListTagsForDeliveryStream ListTagsForDeliveryStreamXAmzTargetEnum = "Firehose_20150804.ListTagsForDeliveryStream"
)

type ListTagsForDeliveryStreamHeaders struct {
	XAmzAlgorithm     *string                                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListTagsForDeliveryStreamXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListTagsForDeliveryStreamRequest struct {
	Headers ListTagsForDeliveryStreamHeaders
	Request shared.ListTagsForDeliveryStreamInput `request:"mediaType=application/json"`
}

type ListTagsForDeliveryStreamResponse struct {
	ContentType                     string
	InvalidArgumentException        *interface{}
	LimitExceededException          *interface{}
	ListTagsForDeliveryStreamOutput *shared.ListTagsForDeliveryStreamOutput
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
}
