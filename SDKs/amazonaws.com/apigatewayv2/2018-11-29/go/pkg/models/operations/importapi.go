package operations

import (
	"openapi/pkg/models/shared"
)

type ImportAPIQueryParams struct {
	Basepath       *string `queryParam:"style=form,explode=true,name=basepath"`
	FailOnWarnings *bool   `queryParam:"style=form,explode=true,name=failOnWarnings"`
}

type ImportAPIHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type ImportAPIRequestBody struct {
	Body string `json:"body"`
}

type ImportAPIRequest struct {
	QueryParams ImportAPIQueryParams
	Headers     ImportAPIHeaders
	Request     ImportAPIRequestBody `request:"mediaType=application/json"`
}

type ImportAPIResponse struct {
	BadRequestException      *interface{}
	ConflictException        *interface{}
	ContentType              string
	ImportAPIResponse        *shared.ImportAPIResponse
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
}
