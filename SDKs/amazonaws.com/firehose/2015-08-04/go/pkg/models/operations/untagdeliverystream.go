package operations

import (
	"openapi/pkg/models/shared"
)

type UntagDeliveryStreamXAmzTargetEnum string

const (
	UntagDeliveryStreamXAmzTargetEnumFirehose20150804UntagDeliveryStream UntagDeliveryStreamXAmzTargetEnum = "Firehose_20150804.UntagDeliveryStream"
)

type UntagDeliveryStreamHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UntagDeliveryStreamXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UntagDeliveryStreamRequest struct {
	Headers UntagDeliveryStreamHeaders
	Request shared.UntagDeliveryStreamInput `request:"mediaType=application/json"`
}

type UntagDeliveryStreamResponse struct {
	ContentType               string
	InvalidArgumentException  *interface{}
	LimitExceededException    *interface{}
	ResourceInUseException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	UntagDeliveryStreamOutput map[string]interface{}
}
