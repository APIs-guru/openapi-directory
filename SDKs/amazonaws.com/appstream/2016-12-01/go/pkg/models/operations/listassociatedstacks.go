package operations

import (
	"openapi/pkg/models/shared"
)

type ListAssociatedStacksXAmzTargetEnum string

const (
	ListAssociatedStacksXAmzTargetEnumPhotonAdminProxyServiceListAssociatedStacks ListAssociatedStacksXAmzTargetEnum = "PhotonAdminProxyService.ListAssociatedStacks"
)

type ListAssociatedStacksHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListAssociatedStacksXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListAssociatedStacksRequest struct {
	Headers ListAssociatedStacksHeaders
	Request shared.ListAssociatedStacksRequest `request:"mediaType=application/json"`
}

type ListAssociatedStacksResponse struct {
	ContentType                string
	ListAssociatedStacksResult *shared.ListAssociatedStacksResult
	StatusCode                 int64
}
