package operations

import (
	"openapi/pkg/models/shared"
)

type ListAssociatedFleetsXAmzTargetEnum string

const (
	ListAssociatedFleetsXAmzTargetEnumPhotonAdminProxyServiceListAssociatedFleets ListAssociatedFleetsXAmzTargetEnum = "PhotonAdminProxyService.ListAssociatedFleets"
)

type ListAssociatedFleetsHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListAssociatedFleetsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListAssociatedFleetsRequest struct {
	Headers ListAssociatedFleetsHeaders
	Request shared.ListAssociatedFleetsRequest `request:"mediaType=application/json"`
}

type ListAssociatedFleetsResponse struct {
	ContentType                string
	ListAssociatedFleetsResult *shared.ListAssociatedFleetsResult
	StatusCode                 int64
}
