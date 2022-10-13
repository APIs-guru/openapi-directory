package operations

import (
	"openapi/pkg/models/shared"
)

type ListDeviceDefinitionVersionsPathParams struct {
	DeviceDefinitionID string `pathParam:"style=simple,explode=false,name=DeviceDefinitionId"`
}

type ListDeviceDefinitionVersionsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListDeviceDefinitionVersionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListDeviceDefinitionVersionsRequest struct {
	PathParams  ListDeviceDefinitionVersionsPathParams
	QueryParams ListDeviceDefinitionVersionsQueryParams
	Headers     ListDeviceDefinitionVersionsHeaders
}

type ListDeviceDefinitionVersionsResponse struct {
	BadRequestException                  *interface{}
	ContentType                          string
	ListDeviceDefinitionVersionsResponse *shared.ListDeviceDefinitionVersionsResponse
	StatusCode                           int64
}
