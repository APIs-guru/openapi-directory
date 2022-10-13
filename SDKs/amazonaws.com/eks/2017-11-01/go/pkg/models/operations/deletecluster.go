package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteClusterPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type DeleteClusterHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteClusterRequest struct {
	PathParams DeleteClusterPathParams
	Headers    DeleteClusterHeaders
}

type DeleteClusterResponse struct {
	ClientException             *interface{}
	ContentType                 string
	DeleteClusterResponse       *shared.DeleteClusterResponse
	ResourceInUseException      *interface{}
	ResourceNotFoundException   *interface{}
	ServerException             *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
}
