package operations

import (
	"openapi/pkg/models/shared"
)

type CreateImageBuilderStreamingUrlxAmzTargetEnum string

const (
	CreateImageBuilderStreamingUrlxAmzTargetEnumPhotonAdminProxyServiceCreateImageBuilderStreamingURL CreateImageBuilderStreamingUrlxAmzTargetEnum = "PhotonAdminProxyService.CreateImageBuilderStreamingURL"
)

type CreateImageBuilderStreamingURLHeaders struct {
	XAmzAlgorithm     *string                                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateImageBuilderStreamingUrlxAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateImageBuilderStreamingURLRequest struct {
	Headers CreateImageBuilderStreamingURLHeaders
	Request shared.CreateImageBuilderStreamingURLRequest `request:"mediaType=application/json"`
}

type CreateImageBuilderStreamingURLResponse struct {
	ContentType                          string
	CreateImageBuilderStreamingURLResult *shared.CreateImageBuilderStreamingURLResult
	OperationNotPermittedException       *interface{}
	ResourceNotFoundException            *interface{}
	StatusCode                           int64
}
