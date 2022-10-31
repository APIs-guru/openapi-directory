package operations

import (
	"openapi/pkg/models/shared"
)

type GetSchemaCreationStatusPathParams struct {
	APIID string `pathParam:"style=simple,explode=false,name=apiId"`
}

type GetSchemaCreationStatusHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetSchemaCreationStatusRequest struct {
	PathParams GetSchemaCreationStatusPathParams
	Headers    GetSchemaCreationStatusHeaders
}

type GetSchemaCreationStatusResponse struct {
	BadRequestException             *interface{}
	ContentType                     string
	GetSchemaCreationStatusResponse *shared.GetSchemaCreationStatusResponse
	InternalFailureException        *interface{}
	NotFoundException               *interface{}
	StatusCode                      int64
	UnauthorizedException           *interface{}
}
