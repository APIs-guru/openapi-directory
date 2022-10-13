package operations

import (
	"openapi/pkg/models/shared"
)

type TagResourceXAmzTargetEnum string

const (
	TagResourceXAmzTargetEnumAwsSimbaAPIServiceV20180301TagResource TagResourceXAmzTargetEnum = "AWSSimbaAPIService_v20180301.TagResource"
)

type TagResourceHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        TagResourceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type TagResourceRequest struct {
	Headers TagResourceHeaders
	Request shared.TagResourceRequest `request:"mediaType=application/json"`
}

type TagResourceResponse struct {
	BadRequest                    *interface{}
	ContentType                   string
	InternalServerError           *interface{}
	NotServiceResourceError       *interface{}
	ResourceDoesNotSupportTagging *interface{}
	ResourceNotFound              *interface{}
	StatusCode                    int64
	TagResourceResponse           map[string]interface{}
}
