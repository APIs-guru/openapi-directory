package operations

import (
	"openapi/pkg/models/shared"
)

type GetResourceDefinitionPathParams struct {
	ResourceDefinitionID string `pathParam:"style=simple,explode=false,name=ResourceDefinitionId"`
}

type GetResourceDefinitionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
