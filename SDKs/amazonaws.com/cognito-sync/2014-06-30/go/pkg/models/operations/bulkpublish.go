package operations

import (
	"openapi/pkg/models/shared"
)

type BulkPublishPathParams struct {
	IdentityPoolID string `pathParam:"style=simple,explode=false,name=IdentityPoolId"`
}

type BulkPublishHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type BulkPublishRequest struct {
	PathParams BulkPublishPathParams
	Headers    BulkPublishHeaders
}

type BulkPublishResponse struct {
	AlreadyStreamedException  *interface{}
	BulkPublishResponse       *shared.BulkPublishResponse
	ContentType               string
	DuplicateRequestException *interface{}
	InternalErrorException    *interface{}
	InvalidParameterException *interface{}
	NotAuthorizedException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
