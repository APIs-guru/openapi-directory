package operations

import (
	"openapi/pkg/models/shared"
)

type PutRemediationConfigurationsXAmzTargetEnum string

const (
	PutRemediationConfigurationsXAmzTargetEnumStarlingDoveServicePutRemediationConfigurations PutRemediationConfigurationsXAmzTargetEnum = "StarlingDoveService.PutRemediationConfigurations"
)

type PutRemediationConfigurationsHeaders struct {
	XAmzAlgorithm     *string                                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        PutRemediationConfigurationsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
