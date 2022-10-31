package operations

import (
	"openapi/pkg/models/shared"
)

type ImportRestAPIModeEnum string

const (
	ImportRestAPIModeEnumImport ImportRestAPIModeEnum = "import"
)

type ImportRestAPIQueryParams struct {
	Failonwarnings *bool                 `queryParam:"style=form,explode=true,name=failonwarnings"`
	Mode           ImportRestAPIModeEnum `queryParam:"style=form,explode=true,name=mode"`
	Parameters     map[string]string     `queryParam:"style=form,explode=true,name=parameters"`
}

type ImportRestAPIHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type ImportRestAPIRequestBody struct {
	Body string `json:"body"`
}

type ImportRestAPIRequest struct {
	QueryParams ImportRestAPIQueryParams
	Headers     ImportRestAPIHeaders
	Request     ImportRestAPIRequestBody `request:"mediaType=application/json"`
}

type ImportRestAPIResponse struct {
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
