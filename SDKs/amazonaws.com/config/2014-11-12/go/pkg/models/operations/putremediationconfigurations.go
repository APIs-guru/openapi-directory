package operations

import (
	"openapi/pkg/models/shared"
)

type PutRemediationConfigurationsXAmzTargetEnum string

const (
	PutRemediationConfigurationsXAmzTargetEnumStarlingDoveServicePutRemediationConfigurations PutRemediationConfigurationsXAmzTargetEnum = "StarlingDoveService.PutRemediationConfigurations"
)

type PutRemediationConfigurationsHeaders struct {
	XAmzAlgorithm     *string                                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutRemediationConfigurationsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutRemediationConfigurationsRequest struct {
	Headers PutRemediationConfigurationsHeaders
	Request shared.PutRemediationConfigurationsRequest `request:"mediaType=application/json"`
}

type PutRemediationConfigurationsResponse struct {
	ContentType                          string
	InsufficientPermissionsException     *interface{}
	InvalidParameterValueException       *interface{}
	PutRemediationConfigurationsResponse *shared.PutRemediationConfigurationsResponse
	StatusCode                           int64
}
