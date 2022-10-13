package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteImageBuilderXAmzTargetEnum string

const (
	DeleteImageBuilderXAmzTargetEnumPhotonAdminProxyServiceDeleteImageBuilder DeleteImageBuilderXAmzTargetEnum = "PhotonAdminProxyService.DeleteImageBuilder"
)

type DeleteImageBuilderHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteImageBuilderXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteImageBuilderRequest struct {
	Headers DeleteImageBuilderHeaders
	Request shared.DeleteImageBuilderRequest `request:"mediaType=application/json"`
}

type DeleteImageBuilderResponse struct {
	ConcurrentModificationException *interface{}
	ContentType                     string
	DeleteImageBuilderResult        *shared.DeleteImageBuilderResult
	OperationNotPermittedException  *interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
}
