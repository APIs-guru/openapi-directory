package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateConnectivityInfoPathParams struct {
	ThingName string `pathParam:"style=simple,explode=false,name=ThingName"`
}

type UpdateConnectivityInfoHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateConnectivityInfoRequestBody struct {
	ConnectivityInfo []shared.ConnectivityInfo `json:"ConnectivityInfo,omitempty"`
}

type UpdateConnectivityInfoRequest struct {
	PathParams UpdateConnectivityInfoPathParams
	Headers    UpdateConnectivityInfoHeaders
	Request    UpdateConnectivityInfoRequestBody `request:"mediaType=application/json"`
}

type UpdateConnectivityInfoResponse struct {
	BadRequestException            *interface{}
	ContentType                    string
	InternalServerErrorException   *interface{}
	StatusCode                     int64
	UpdateConnectivityInfoResponse *shared.UpdateConnectivityInfoResponse
}
