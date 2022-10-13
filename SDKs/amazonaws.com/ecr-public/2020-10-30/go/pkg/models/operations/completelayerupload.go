package operations

import (
	"openapi/pkg/models/shared"
)

type CompleteLayerUploadXAmzTargetEnum string

const (
	CompleteLayerUploadXAmzTargetEnumSpencerFrontendServiceCompleteLayerUpload CompleteLayerUploadXAmzTargetEnum = "SpencerFrontendService.CompleteLayerUpload"
)

type CompleteLayerUploadHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CompleteLayerUploadXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CompleteLayerUploadRequest struct {
	Headers CompleteLayerUploadHeaders
	Request shared.CompleteLayerUploadRequest `request:"mediaType=application/json"`
}

type CompleteLayerUploadResponse struct {
	CompleteLayerUploadResponse *shared.CompleteLayerUploadResponse
	ContentType                 string
	EmptyUploadException        *interface{}
	InvalidLayerException       *interface{}
	InvalidParameterException   *interface{}
	LayerAlreadyExistsException *interface{}
	LayerPartTooSmallException  *interface{}
	RegistryNotFoundException   *interface{}
	RepositoryNotFoundException *interface{}
	ServerException             *interface{}
	StatusCode                  int64
	UnsupportedCommandException *interface{}
	UploadNotFoundException     *interface{}
}
