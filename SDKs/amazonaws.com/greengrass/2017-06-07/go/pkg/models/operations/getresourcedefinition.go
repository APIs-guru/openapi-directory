package operations

import (
	"openapi/pkg/models/shared"
)

type GetResourceDefinitionPathParams struct {
	ResourceDefinitionID string `pathParam:"style=simple,explode=false,name=ResourceDefinitionId"`
}

type GetResourceDefinitionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetResourceDefinitionRequest struct {
	PathParams GetResourceDefinitionPathParams
	Headers    GetResourceDefinitionHeaders
}

type GetResourceDefinitionResponse struct {
	BadRequestException           *interface{}
	ContentType                   string
	GetResourceDefinitionResponse *shared.GetResourceDefinitionResponse
	StatusCode                    int64
}
