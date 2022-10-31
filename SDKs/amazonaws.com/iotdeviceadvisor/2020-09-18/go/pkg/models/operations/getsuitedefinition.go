package operations

import (
	"openapi/pkg/models/shared"
)

type GetSuiteDefinitionPathParams struct {
	SuiteDefinitionID string `pathParam:"style=simple,explode=false,name=suiteDefinitionId"`
}

type GetSuiteDefinitionQueryParams struct {
	SuiteDefinitionVersion *string `queryParam:"style=form,explode=true,name=suiteDefinitionVersion"`
}

type GetSuiteDefinitionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetSuiteDefinitionRequest struct {
	PathParams  GetSuiteDefinitionPathParams
	QueryParams GetSuiteDefinitionQueryParams
	Headers     GetSuiteDefinitionHeaders
}

type GetSuiteDefinitionResponse struct {
	ContentType                string
	GetSuiteDefinitionResponse *shared.GetSuiteDefinitionResponse
	InternalServerException    *interface{}
	ResourceNotFoundException  *interface{}
	StatusCode                 int64
	ValidationException        *interface{}
}
