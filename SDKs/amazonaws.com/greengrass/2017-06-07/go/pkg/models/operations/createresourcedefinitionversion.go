package operations

import (
	"openapi/pkg/models/shared"
)

type CreateResourceDefinitionVersionPathParams struct {
	ResourceDefinitionID string `pathParam:"style=simple,explode=false,name=ResourceDefinitionId"`
}

type CreateResourceDefinitionVersionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmznClientToken  *string `header:"style=simple,explode=false,name=X-Amzn-Client-Token"`
}

type CreateResourceDefinitionVersionRequestBody struct {
	Resources []shared.Resource `json:"Resources,omitempty"`
}

type CreateResourceDefinitionVersionRequest struct {
	PathParams CreateResourceDefinitionVersionPathParams
	Headers    CreateResourceDefinitionVersionHeaders
	Request    CreateResourceDefinitionVersionRequestBody `request:"mediaType=application/json"`
}

type CreateResourceDefinitionVersionResponse struct {
	BadRequestException                     *interface{}
	ContentType                             string
	CreateResourceDefinitionVersionResponse *shared.CreateResourceDefinitionVersionResponse
	StatusCode                              int64
}
