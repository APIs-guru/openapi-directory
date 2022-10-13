package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeProblemObservationsXAmzTargetEnum string

const (
	DescribeProblemObservationsXAmzTargetEnumEc2WindowsBarleyServiceDescribeProblemObservations DescribeProblemObservationsXAmzTargetEnum = "EC2WindowsBarleyService.DescribeProblemObservations"
)

type DescribeProblemObservationsHeaders struct {
	XAmzAlgorithm     *string                                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeProblemObservationsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeProblemObservationsRequest struct {
	Headers DescribeProblemObservationsHeaders
	Request shared.DescribeProblemObservationsRequest `request:"mediaType=application/json"`
}

type DescribeProblemObservationsResponse struct {
	ContentType                         string
	DescribeProblemObservationsResponse *shared.DescribeProblemObservationsResponse
	InternalServerException             *interface{}
	ResourceNotFoundException           *interface{}
	StatusCode                          int64
	ValidationException                 *interface{}
}
