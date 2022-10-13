package operations

import (
	"openapi/pkg/models/shared"
)

type ListVaultsPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
}

type ListVaultsQueryParams struct {
	Limit  *string `queryParam:"style=form,explode=true,name=limit"`
	Marker *string `queryParam:"style=form,explode=true,name=marker"`
}

type ListVaultsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListVaultsRequest struct {
	PathParams  ListVaultsPathParams
	QueryParams ListVaultsQueryParams
	Headers     ListVaultsHeaders
}

type ListVaultsResponse struct {
	ContentType                    string
	InvalidParameterValueException *interface{}
	ListVaultsOutput               *shared.ListVaultsOutput
	MissingParameterValueException *interface{}
	ResourceNotFoundException      *interface{}
	ServiceUnavailableException    *interface{}
	StatusCode                     int64
}
