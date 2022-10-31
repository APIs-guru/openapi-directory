package operations

import (
	"openapi/pkg/models/shared"
)

type GetCoreDefinitionVersionPathParams struct {
	CoreDefinitionID        string `pathParam:"style=simple,explode=false,name=CoreDefinitionId"`
	CoreDefinitionVersionID string `pathParam:"style=simple,explode=false,name=CoreDefinitionVersionId"`
}

type GetCoreDefinitionVersionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetCoreDefinitionVersionRequest struct {
	PathParams GetCoreDefinitionVersionPathParams
	Headers    GetCoreDefinitionVersionHeaders
}

type GetCoreDefinitionVersionResponse struct {
	BadRequestException              *interface{}
	ContentType                      string
	GetCoreDefinitionVersionResponse *shared.GetCoreDefinitionVersionResponse
	StatusCode                       int64
}
