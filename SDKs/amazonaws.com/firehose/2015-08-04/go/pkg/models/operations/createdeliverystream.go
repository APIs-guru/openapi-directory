package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDeliveryStreamXAmzTargetEnum string

const (
	CreateDeliveryStreamXAmzTargetEnumFirehose20150804CreateDeliveryStream CreateDeliveryStreamXAmzTargetEnum = "Firehose_20150804.CreateDeliveryStream"
)

type CreateDeliveryStreamHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateDeliveryStreamXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateDeliveryStreamRequest struct {
	Headers CreateDeliveryStreamHeaders
	Request shared.CreateDeliveryStreamInput `request:"mediaType=application/json"`
}

type CreateDeliveryStreamResponse struct {
	ContentType                 string
	CreateDeliveryStreamOutput  *shared.CreateDeliveryStreamOutput
	InvalidArgumentException    *interface{}
	InvalidKmsResourceException *interface{}
	LimitExceededException      *interface{}
	ResourceInUseException      *interface{}
	StatusCode                  int64
}
