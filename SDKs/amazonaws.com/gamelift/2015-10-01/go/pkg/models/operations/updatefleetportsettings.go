package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateFleetPortSettingsXAmzTargetEnum string

const (
	UpdateFleetPortSettingsXAmzTargetEnumGameLiftUpdateFleetPortSettings UpdateFleetPortSettingsXAmzTargetEnum = "GameLift.UpdateFleetPortSettings"
)

type UpdateFleetPortSettingsHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateFleetPortSettingsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateFleetPortSettingsRequest struct {
	Headers UpdateFleetPortSettingsHeaders
	Request shared.UpdateFleetPortSettingsInput `request:"mediaType=application/json"`
}

type UpdateFleetPortSettingsResponse struct {
	ConflictException             *interface{}
	ContentType                   string
	InternalServiceException      *interface{}
	InvalidFleetStatusException   *interface{}
	InvalidRequestException       *interface{}
	LimitExceededException        *interface{}
	NotFoundException             *interface{}
	StatusCode                    int64
	UnauthorizedException         *interface{}
	UpdateFleetPortSettingsOutput *shared.UpdateFleetPortSettingsOutput
}
