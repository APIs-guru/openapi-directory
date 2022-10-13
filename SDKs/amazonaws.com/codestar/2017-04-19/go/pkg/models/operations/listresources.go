package operations

import (
	"openapi/pkg/models/shared"
)

type ListResourcesXAmzTargetEnum string

const (
	ListResourcesXAmzTargetEnumCodeStar20170419ListResources ListResourcesXAmzTargetEnum = "CodeStar_20170419.ListResources"
)

type ListResourcesHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListResourcesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListResourcesRequest struct {
	Headers ListResourcesHeaders
	Request shared.ListResourcesRequest `request:"mediaType=application/json"`
}

type ListResourcesResponse struct {
	ContentType               string
	InvalidNextTokenException *interface{}
	ListResourcesResult       *shared.ListResourcesResult
	ProjectNotFoundException  *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
