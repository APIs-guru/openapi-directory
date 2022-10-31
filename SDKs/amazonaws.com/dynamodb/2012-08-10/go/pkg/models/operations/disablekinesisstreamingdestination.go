package operations

import (
	"openapi/pkg/models/shared"
)

type DisableKinesisStreamingDestinationXAmzTargetEnum string

const (
	DisableKinesisStreamingDestinationXAmzTargetEnumDynamoDb20120810DisableKinesisStreamingDestination DisableKinesisStreamingDestinationXAmzTargetEnum = "DynamoDB_20120810.DisableKinesisStreamingDestination"
)

type DisableKinesisStreamingDestinationHeaders struct {
	XAmzAlgorithm     *string                                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DisableKinesisStreamingDestinationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DisableKinesisStreamingDestinationRequest struct {
	Headers DisableKinesisStreamingDestinationHeaders
	Request shared.KinesisStreamingDestinationInput `request:"mediaType=application/json"`
}

type DisableKinesisStreamingDestinationResponse struct {
	ContentType                       string
	InternalServerError               *interface{}
	KinesisStreamingDestinationOutput *shared.KinesisStreamingDestinationOutput
	LimitExceededException            *interface{}
	ResourceInUseException            *interface{}
	ResourceNotFoundException         *interface{}
	StatusCode                        int64
}
