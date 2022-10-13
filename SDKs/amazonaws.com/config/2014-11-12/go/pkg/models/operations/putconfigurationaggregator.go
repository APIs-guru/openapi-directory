package operations

import (
	"openapi/pkg/models/shared"
)

type PutConfigurationAggregatorXAmzTargetEnum string

const (
	PutConfigurationAggregatorXAmzTargetEnumStarlingDoveServicePutConfigurationAggregator PutConfigurationAggregatorXAmzTargetEnum = "StarlingDoveService.PutConfigurationAggregator"
)

type PutConfigurationAggregatorHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutConfigurationAggregatorXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutConfigurationAggregatorRequest struct {
	Headers PutConfigurationAggregatorHeaders
	Request shared.PutConfigurationAggregatorRequest `request:"mediaType=application/json"`
}

type PutConfigurationAggregatorResponse struct {
	ContentType                                string
	InvalidParameterValueException             *interface{}
	InvalidRoleException                       *interface{}
	LimitExceededException                     *interface{}
	NoAvailableOrganizationException           *interface{}
	OrganizationAccessDeniedException          *interface{}
	OrganizationAllFeaturesNotEnabledException *interface{}
	PutConfigurationAggregatorResponse         *shared.PutConfigurationAggregatorResponse
	StatusCode                                 int64
}
