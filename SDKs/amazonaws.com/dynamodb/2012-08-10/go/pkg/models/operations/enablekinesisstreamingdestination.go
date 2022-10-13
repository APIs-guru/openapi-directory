package operations

import (
	"openapi/pkg/models/shared"
)

type EnableKinesisStreamingDestinationXAmzTargetEnum string

const (
	EnableKinesisStreamingDestinationXAmzTargetEnumDynamoDb20120810EnableKinesisStreamingDestination EnableKinesisStreamingDestinationXAmzTargetEnum = "DynamoDB_20120810.EnableKinesisStreamingDestination"
)

type EnableKinesisStreamingDestinationHeaders struct {
	XAmzAlgorithm     *string                                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        EnableKinesisStreamingDestinationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type EnableKinesisStreamingDestinationRequest struct {
	Headers EnableKinesisStreamingDestinationHeaders
	Request shared.KinesisStreamingDestinationInput `request:"mediaType=application/json"`
}

type EnableKinesisStreamingDestinationResponse struct {
	ContentType                       string
	InternalServerError               *interface{}
	KinesisStreamingDestinationOutput *shared.KinesisStreamingDestinationOutput
	LimitExceededException            *interface{}
	ResourceInUseException            *interface{}
	ResourceNotFoundException         *interface{}
	StatusCode                        int64
}
