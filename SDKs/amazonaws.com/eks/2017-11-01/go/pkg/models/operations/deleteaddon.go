package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAddonPathParams struct {
	AddonName string `pathParam:"style=simple,explode=false,name=addonName"`
	Name      string `pathParam:"style=simple,explode=false,name=name"`
}

type DeleteAddonQueryParams struct {
	Preserve *bool `queryParam:"style=form,explode=true,name=preserve"`
}

type DeleteAddonHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteAddonRequest struct {
	PathParams  DeleteAddonPathParams
	QueryParams DeleteAddonQueryParams
	Headers     DeleteAddonHeaders
}

type DeleteAddonResponse struct {
	ClientException           *interface{}
	ContentType               string
	DeleteAddonResponse       *shared.DeleteAddonResponse
	InvalidParameterException *interface{}
	InvalidRequestException   *interface{}
	ResourceNotFoundException *interface{}
	ServerException           *interface{}
	StatusCode                int64
}
