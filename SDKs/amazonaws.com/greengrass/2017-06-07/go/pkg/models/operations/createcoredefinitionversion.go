package operations

import (
	"openapi/pkg/models/shared"
)

type CreateCoreDefinitionVersionPathParams struct {
	CoreDefinitionID string `pathParam:"style=simple,explode=false,name=CoreDefinitionId"`
}

type CreateCoreDefinitionVersionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
	XAmznClientToken  *string `header:"name=X-Amzn-Client-Token"`
}

type CreateCoreDefinitionVersionRequestBody struct {
	Cores []shared.Core `json:"Cores"`
}

type CreateCoreDefinitionVersionRequest struct {
	PathParams CreateCoreDefinitionVersionPathParams
	Headers    CreateCoreDefinitionVersionHeaders
	Request    CreateCoreDefinitionVersionRequestBody `request:"mediaType=application/json"`
}

type CreateCoreDefinitionVersionResponse struct {
	BadRequestException                 *interface{}
	ContentType                         string
	CreateCoreDefinitionVersionResponse *shared.CreateCoreDefinitionVersionResponse
	StatusCode                          int64
}
