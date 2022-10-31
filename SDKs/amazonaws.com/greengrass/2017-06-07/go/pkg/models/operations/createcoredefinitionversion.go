package operations

import (
	"openapi/pkg/models/shared"
)

type CreateCoreDefinitionVersionPathParams struct {
	CoreDefinitionID string `pathParam:"style=simple,explode=false,name=CoreDefinitionId"`
}

type CreateCoreDefinitionVersionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmznClientToken  *string `header:"style=simple,explode=false,name=X-Amzn-Client-Token"`
}

type CreateCoreDefinitionVersionRequestBody struct {
	Cores []shared.Core `json:"Cores,omitempty"`
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
