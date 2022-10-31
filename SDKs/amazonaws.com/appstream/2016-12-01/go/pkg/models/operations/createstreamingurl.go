package operations

import (
	"openapi/pkg/models/shared"
)

type CreateStreamingUrlxAmzTargetEnum string

const (
	CreateStreamingUrlxAmzTargetEnumPhotonAdminProxyServiceCreateStreamingURL CreateStreamingUrlxAmzTargetEnum = "PhotonAdminProxyService.CreateStreamingURL"
)

type CreateStreamingURLHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateStreamingUrlxAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateStreamingURLRequest struct {
	Headers CreateStreamingURLHeaders
	Request shared.CreateStreamingURLRequest `request:"mediaType=application/json"`
}

type CreateStreamingURLResponse struct {
	ContentType                          string
	CreateStreamingURLResult             *shared.CreateStreamingURLResult
	InvalidParameterCombinationException *interface{}
	OperationNotPermittedException       *interface{}
	ResourceNotAvailableException        *interface{}
	ResourceNotFoundException            *interface{}
	StatusCode                           int64
}
