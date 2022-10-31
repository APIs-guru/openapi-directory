package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAPIMappingPathParams struct {
	APIMappingID string `pathParam:"style=simple,explode=false,name=apiMappingId"`
	DomainName   string `pathParam:"style=simple,explode=false,name=domainName"`
}

type UpdateAPIMappingHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type UpdateAPIMappingRequestBody struct {
	APIID         string  `json:"apiId"`
	APIMappingKey *string `json:"apiMappingKey,omitempty"`
	Stage         *string `json:"stage,omitempty"`
}

type UpdateAPIMappingRequest struct {
	PathParams UpdateAPIMappingPathParams
	Headers    UpdateAPIMappingHeaders
	Request    UpdateAPIMappingRequestBody `request:"mediaType=application/json"`
}

type UpdateAPIMappingResponse struct {
	BadRequestException      *interface{}
	ConflictException        *interface{}
	ContentType              string
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
	UpdateAPIMappingResponse *shared.UpdateAPIMappingResponse
}
