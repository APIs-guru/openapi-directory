package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDeliveryStreamXAmzTargetEnum string

const (
	CreateDeliveryStreamXAmzTargetEnumFirehose20150804CreateDeliveryStream CreateDeliveryStreamXAmzTargetEnum = "Firehose_20150804.CreateDeliveryStream"
)

type CreateDeliveryStreamHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateDeliveryStreamXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
