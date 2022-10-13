package operations

import (
	"openapi/pkg/models/shared"
)

type ListConfigurationsXAmzTargetEnum string

const (
	ListConfigurationsXAmzTargetEnumAwsPoseidonServiceV20151101ListConfigurations ListConfigurationsXAmzTargetEnum = "AWSPoseidonService_V2015_11_01.ListConfigurations"
)

type ListConfigurationsHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListConfigurationsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListConfigurationsRequest struct {
	Headers ListConfigurationsHeaders
	Request shared.ListConfigurationsRequest `request:"mediaType=application/json"`
}

type ListConfigurationsResponse struct {
	AuthorizationErrorException    *interface{}
	ContentType                    string
	HomeRegionNotSetException      *interface{}
	InvalidParameterException      *interface{}
	InvalidParameterValueException *interface{}
	ListConfigurationsResponse     *shared.ListConfigurationsResponse
	ResourceNotFoundException      *interface{}
	ServerInternalErrorException   *interface{}
	StatusCode                     int64
}
