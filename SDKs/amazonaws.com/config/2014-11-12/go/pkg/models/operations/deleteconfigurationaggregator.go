package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteConfigurationAggregatorXAmzTargetEnum string

const (
	DeleteConfigurationAggregatorXAmzTargetEnumStarlingDoveServiceDeleteConfigurationAggregator DeleteConfigurationAggregatorXAmzTargetEnum = "StarlingDoveService.DeleteConfigurationAggregator"
)

type DeleteConfigurationAggregatorHeaders struct {
	XAmzAlgorithm     *string                                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteConfigurationAggregatorXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteConfigurationAggregatorRequest struct {
	Headers DeleteConfigurationAggregatorHeaders
	Request shared.DeleteConfigurationAggregatorRequest `request:"mediaType=application/json"`
}

type DeleteConfigurationAggregatorResponse struct {
	ContentType                            string
	NoSuchConfigurationAggregatorException *interface{}
	StatusCode                             int64
}
