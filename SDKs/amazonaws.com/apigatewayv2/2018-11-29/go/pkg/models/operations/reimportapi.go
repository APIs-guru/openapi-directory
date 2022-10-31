package operations

import (
	"openapi/pkg/models/shared"
)

type ReimportAPIPathParams struct {
	APIID string `pathParam:"style=simple,explode=false,name=apiId"`
}

type ReimportAPIQueryParams struct {
	Basepath       *string `queryParam:"style=form,explode=true,name=basepath"`
	FailOnWarnings *bool   `queryParam:"style=form,explode=true,name=failOnWarnings"`
}

type ReimportAPIHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type ReimportAPIRequestBody struct {
	Body string `json:"body"`
}

type ReimportAPIRequest struct {
	PathParams  ReimportAPIPathParams
	QueryParams ReimportAPIQueryParams
	Headers     ReimportAPIHeaders
	Request     ReimportAPIRequestBody `request:"mediaType=application/json"`
}

type ReimportAPIResponse struct {
	BadRequestException      *interface{}
	ConflictException        *interface{}
	ContentType              string
	NotFoundException        *interface{}
	ReimportAPIResponse      *shared.ReimportAPIResponse
	StatusCode               int64
	TooManyRequestsException *interface{}
}
