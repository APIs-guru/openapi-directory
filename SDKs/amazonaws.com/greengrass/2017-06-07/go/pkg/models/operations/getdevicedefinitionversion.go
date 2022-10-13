package operations

import (
	"openapi/pkg/models/shared"
)

type GetDeviceDefinitionVersionPathParams struct {
	DeviceDefinitionID        string `pathParam:"style=simple,explode=false,name=DeviceDefinitionId"`
	DeviceDefinitionVersionID string `pathParam:"style=simple,explode=false,name=DeviceDefinitionVersionId"`
}

type GetDeviceDefinitionVersionQueryParams struct {
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type GetDeviceDefinitionVersionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeviceDefinitionVersionRequest struct {
	PathParams  GetDeviceDefinitionVersionPathParams
	QueryParams GetDeviceDefinitionVersionQueryParams
	Headers     GetDeviceDefinitionVersionHeaders
}

type GetDeviceDefinitionVersionResponse struct {
	BadRequestException                *interface{}
	ContentType                        string
	GetDeviceDefinitionVersionResponse *shared.GetDeviceDefinitionVersionResponse
	StatusCode                         int64
}
