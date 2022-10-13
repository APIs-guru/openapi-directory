package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateStagePathParams struct {
	RestapiID string `pathParam:"style=simple,explode=false,name=restapi_id"`
	StageName string `pathParam:"style=simple,explode=false,name=stage_name"`
}

type UpdateStageHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateStageRequestBody struct {
	PatchOperations []shared.PatchOperation `json:"patchOperations"`
}

type UpdateStageRequest struct {
	PathParams UpdateStagePathParams
	Headers    UpdateStageHeaders
	Request    UpdateStageRequestBody `request:"mediaType=application/json"`
}

type UpdateStageResponse struct {
	BadRequestException      *interface{}
	ConflictException        *interface{}
	ContentType              string
	LimitExceededException   *interface{}
	NotFoundException        *interface{}
	Stage                    *shared.Stage
	StatusCode               int64
	TooManyRequestsException *interface{}
	UnauthorizedException    *interface{}
}
