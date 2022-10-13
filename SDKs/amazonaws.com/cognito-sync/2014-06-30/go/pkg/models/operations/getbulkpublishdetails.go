package operations

import (
	"openapi/pkg/models/shared"
)

type GetBulkPublishDetailsPathParams struct {
	IdentityPoolID string `pathParam:"style=simple,explode=false,name=IdentityPoolId"`
}

type GetBulkPublishDetailsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetBulkPublishDetailsRequest struct {
	PathParams GetBulkPublishDetailsPathParams
	Headers    GetBulkPublishDetailsHeaders
}

type GetBulkPublishDetailsResponse struct {
	ContentType                   string
	GetBulkPublishDetailsResponse *shared.GetBulkPublishDetailsResponse
	InternalErrorException        *interface{}
	InvalidParameterException     *interface{}
	NotAuthorizedException        *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
}
