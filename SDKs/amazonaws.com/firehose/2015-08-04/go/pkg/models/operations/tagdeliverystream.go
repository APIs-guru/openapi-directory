package operations

import (
	"openapi/pkg/models/shared"
)

type TagDeliveryStreamXAmzTargetEnum string

const (
	TagDeliveryStreamXAmzTargetEnumFirehose20150804TagDeliveryStream TagDeliveryStreamXAmzTargetEnum = "Firehose_20150804.TagDeliveryStream"
)

type TagDeliveryStreamHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        TagDeliveryStreamXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type TagDeliveryStreamRequest struct {
	Headers TagDeliveryStreamHeaders
	Request shared.TagDeliveryStreamInput `request:"mediaType=application/json"`
}

type TagDeliveryStreamResponse struct {
	ContentType               string
	InvalidArgumentException  *interface{}
	LimitExceededException    *interface{}
	ResourceInUseException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	TagDeliveryStreamOutput   map[string]interface{}
}
