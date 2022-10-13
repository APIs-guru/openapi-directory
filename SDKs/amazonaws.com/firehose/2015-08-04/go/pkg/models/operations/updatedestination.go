package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateDestinationXAmzTargetEnum string

const (
	UpdateDestinationXAmzTargetEnumFirehose20150804UpdateDestination UpdateDestinationXAmzTargetEnum = "Firehose_20150804.UpdateDestination"
)

type UpdateDestinationHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateDestinationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateDestinationRequest struct {
	Headers UpdateDestinationHeaders
	Request shared.UpdateDestinationInput `request:"mediaType=application/json"`
}

type UpdateDestinationResponse struct {
	ConcurrentModificationException *interface{}
	ContentType                     string
	InvalidArgumentException        *interface{}
	ResourceInUseException          *interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
	UpdateDestinationOutput         map[string]interface{}
}
