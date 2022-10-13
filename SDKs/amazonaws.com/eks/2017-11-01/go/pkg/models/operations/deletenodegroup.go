package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteNodegroupPathParams struct {
	Name          string `pathParam:"style=simple,explode=false,name=name"`
	NodegroupName string `pathParam:"style=simple,explode=false,name=nodegroupName"`
}

type DeleteNodegroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteNodegroupRequest struct {
	PathParams DeleteNodegroupPathParams
	Headers    DeleteNodegroupHeaders
}

type DeleteNodegroupResponse struct {
	ClientException             *interface{}
	ContentType                 string
	DeleteNodegroupResponse     *shared.DeleteNodegroupResponse
	InvalidParameterException   *interface{}
	ResourceInUseException      *interface{}
	ResourceNotFoundException   *interface{}
	ServerException             *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
}
