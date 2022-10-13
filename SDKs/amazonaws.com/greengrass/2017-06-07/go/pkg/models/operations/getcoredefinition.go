package operations

import (
	"openapi/pkg/models/shared"
)

type GetCoreDefinitionPathParams struct {
	CoreDefinitionID string `pathParam:"style=simple,explode=false,name=CoreDefinitionId"`
}

type GetCoreDefinitionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetCoreDefinitionRequest struct {
	PathParams GetCoreDefinitionPathParams
	Headers    GetCoreDefinitionHeaders
}

type GetCoreDefinitionResponse struct {
	BadRequestException       *interface{}
	ContentType               string
	GetCoreDefinitionResponse *shared.GetCoreDefinitionResponse
	StatusCode                int64
}
