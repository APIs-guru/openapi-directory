package operations

import (
	"openapi/pkg/models/shared"
)

type StopGameSessionPlacementXAmzTargetEnum string

const (
	StopGameSessionPlacementXAmzTargetEnumGameLiftStopGameSessionPlacement StopGameSessionPlacementXAmzTargetEnum = "GameLift.StopGameSessionPlacement"
)

type StopGameSessionPlacementHeaders struct {
	XAmzAlgorithm     *string                                `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        StopGameSessionPlacementXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type StopGameSessionPlacementRequest struct {
	Headers StopGameSessionPlacementHeaders
	Request shared.StopGameSessionPlacementInput `request:"mediaType=application/json"`
}

type StopGameSessionPlacementResponse struct {
	ContentType                    string
	InternalServiceException       *interface{}
	InvalidRequestException        *interface{}
	NotFoundException              *interface{}
	StatusCode                     int64
	StopGameSessionPlacementOutput *shared.StopGameSessionPlacementOutput
	UnauthorizedException          *interface{}
}
