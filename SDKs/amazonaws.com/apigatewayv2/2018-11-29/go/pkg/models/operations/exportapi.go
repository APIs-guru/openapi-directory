package operations

import (
	"openapi/pkg/models/shared"
)

type ExportAPIPathParams struct {
	APIID         string `pathParam:"style=simple,explode=false,name=apiId"`
	Specification string `pathParam:"style=simple,explode=false,name=specification"`
}

type ExportAPIQueryParams struct {
	ExportVersion     *string `queryParam:"style=form,explode=true,name=exportVersion"`
	IncludeExtensions *bool   `queryParam:"style=form,explode=true,name=includeExtensions"`
	OutputType        string  `queryParam:"style=form,explode=true,name=outputType"`
	StageName         *string `queryParam:"style=form,explode=true,name=stageName"`
}

type ExportAPIHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ExportAPIRequest struct {
	PathParams  ExportAPIPathParams
	QueryParams ExportAPIQueryParams
	Headers     ExportAPIHeaders
}

type ExportAPIResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	ExportAPIResponse        *shared.ExportAPIResponse
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
}
