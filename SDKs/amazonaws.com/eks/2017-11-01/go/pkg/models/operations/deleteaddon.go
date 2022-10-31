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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
