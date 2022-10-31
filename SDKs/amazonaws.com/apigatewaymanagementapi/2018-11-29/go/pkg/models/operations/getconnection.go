package operations

import (
	"openapi/pkg/models/shared"
)

type GetConnectionPathParams struct {
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type GetConnectionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetConnectionRequest struct {
	PathParams GetConnectionPathParams
	Headers    GetConnectionHeaders
}

type GetConnectionResponse struct {
	ContentType            string
	ForbiddenException     *interface{}
	GetConnectionResponse  *shared.GetConnectionResponse
	GoneException          *interface{}
	LimitExceededException *interface{}
	StatusCode             int64
}
