package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteStackXAmzTargetEnum string

const (
	DeleteStackXAmzTargetEnumPhotonAdminProxyServiceDeleteStack DeleteStackXAmzTargetEnum = "PhotonAdminProxyService.DeleteStack"
)

type DeleteStackHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteStackXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteStackRequest struct {
	Headers DeleteStackHeaders
	Request shared.DeleteStackRequest `request:"mediaType=application/json"`
}

type DeleteStackResponse struct {
	ConcurrentModificationException *interface{}
	ContentType                     string
	DeleteStackResult               map[string]interface{}
	ResourceInUseException          *interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
}
