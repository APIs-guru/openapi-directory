package operations

import (
	"openapi/pkg/models/shared"
)

type BatchCheckLayerAvailabilityXAmzTargetEnum string

const (
	BatchCheckLayerAvailabilityXAmzTargetEnumSpencerFrontendServiceBatchCheckLayerAvailability BatchCheckLayerAvailabilityXAmzTargetEnum = "SpencerFrontendService.BatchCheckLayerAvailability"
)

type BatchCheckLayerAvailabilityHeaders struct {
	XAmzAlgorithm     *string                                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        BatchCheckLayerAvailabilityXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type BatchCheckLayerAvailabilityRequest struct {
	Headers BatchCheckLayerAvailabilityHeaders
	Request shared.BatchCheckLayerAvailabilityRequest `request:"mediaType=application/json"`
}

type BatchCheckLayerAvailabilityResponse struct {
	BatchCheckLayerAvailabilityResponse *shared.BatchCheckLayerAvailabilityResponse
	ContentType                         string
	InvalidParameterException           *interface{}
	RegistryNotFoundException           *interface{}
	RepositoryNotFoundException         *interface{}
	ServerException                     *interface{}
	StatusCode                          int64
}
