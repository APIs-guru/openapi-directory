package operations

import (
	"openapi/pkg/models/shared"
)

type ImportAPIKeysFormatEnum string

const (
	ImportAPIKeysFormatEnumCsv ImportAPIKeysFormatEnum = "csv"
)

type ImportAPIKeysModeEnum string

const (
	ImportAPIKeysModeEnumImport ImportAPIKeysModeEnum = "import"
)

type ImportAPIKeysQueryParams struct {
	Failonwarnings *bool                   `queryParam:"style=form,explode=true,name=failonwarnings"`
	Format         ImportAPIKeysFormatEnum `queryParam:"style=form,explode=true,name=format"`
	Mode           ImportAPIKeysModeEnum   `queryParam:"style=form,explode=true,name=mode"`
}

type ImportAPIKeysHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ImportAPIKeysRequestBody struct {
	Body string `json:"body"`
}

type ImportAPIKeysRequest struct {
	QueryParams ImportAPIKeysQueryParams
	Headers     ImportAPIKeysHeaders
	Request     ImportAPIKeysRequestBody `request:"mediaType=application/json"`
}

type ImportAPIKeysResponse struct {
	APIKeyIds                *shared.APIKeyIds
	BadRequestException      *interface{}
	ConflictException        *interface{}
	ContentType              string
	LimitExceededException   *interface{}
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
	UnauthorizedException    *interface{}
}
