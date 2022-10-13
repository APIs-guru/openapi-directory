package operations

import (
	"openapi/pkg/models/shared"
)

type ListDeliveryStreamsXAmzTargetEnum string

const (
	ListDeliveryStreamsXAmzTargetEnumFirehose20150804ListDeliveryStreams ListDeliveryStreamsXAmzTargetEnum = "Firehose_20150804.ListDeliveryStreams"
)

type ListDeliveryStreamsHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListDeliveryStreamsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListDeliveryStreamsRequest struct {
	Headers ListDeliveryStreamsHeaders
	Request shared.ListDeliveryStreamsInput `request:"mediaType=application/json"`
}

type ListDeliveryStreamsResponse struct {
	ContentType               string
	ListDeliveryStreamsOutput *shared.ListDeliveryStreamsOutput
	StatusCode                int64
}
