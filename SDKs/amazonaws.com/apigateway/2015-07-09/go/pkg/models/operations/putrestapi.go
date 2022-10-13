package operations

import (
	"openapi/pkg/models/shared"
)

type PutRestAPIPathParams struct {
	RestapiID string `pathParam:"style=simple,explode=false,name=restapi_id"`
}

type PutRestAPIModeEnum string

const (
	PutRestAPIModeEnumMerge     PutRestAPIModeEnum = "merge"
	PutRestAPIModeEnumOverwrite PutRestAPIModeEnum = "overwrite"
)

type PutRestAPIQueryParams struct {
	Failonwarnings *bool               `queryParam:"style=form,explode=true,name=failonwarnings"`
	Mode           *PutRestAPIModeEnum `queryParam:"style=form,explode=true,name=mode"`
	Parameters     map[string]string   `queryParam:"style=form,explode=true,name=parameters"`
}

type PutRestAPIHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PutRestAPIRequestBody struct {
	Body string `json:"body"`
}

type PutRestAPIRequest struct {
	PathParams  PutRestAPIPathParams
	QueryParams PutRestAPIQueryParams
	Headers     PutRestAPIHeaders
	Request     PutRestAPIRequestBody `request:"mediaType=application/json"`
}

type PutRestAPIResponse struct {
	BadRequestException      *interface{}
	ConflictException        *interface{}
	ContentType              string
	LimitExceededException   *interface{}
	NotFoundException        *interface{}
	RestAPI                  *shared.RestAPI
	StatusCode               int64
	TooManyRequestsException *interface{}
	UnauthorizedException    *interface{}
}
