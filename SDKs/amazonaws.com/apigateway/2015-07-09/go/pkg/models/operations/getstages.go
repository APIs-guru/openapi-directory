package operations

import (
	"openapi/pkg/models/shared"
)

type GetStagesPathParams struct {
	RestapiID string `pathParam:"style=simple,explode=false,name=restapi_id"`
}

type GetStagesQueryParams struct {
	DeploymentID *string `queryParam:"style=form,explode=true,name=deploymentId"`
}

type GetStagesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetStagesRequest struct {
	PathParams  GetStagesPathParams
	QueryParams GetStagesQueryParams
	Headers     GetStagesHeaders
}

type GetStagesResponse struct {
	BadRequestException      *interface{}
	ConflictException        *interface{}
	ContentType              string
	LimitExceededException   *interface{}
	NotFoundException        *interface{}
	Stages                   *shared.Stages
	StatusCode               int64
	TooManyRequestsException *interface{}
	UnauthorizedException    *interface{}
}
