package operations

import (
	"openapi/pkg/models/shared"
)

type InitiateLayerUploadXAmzTargetEnum string

const (
	InitiateLayerUploadXAmzTargetEnumSpencerFrontendServiceInitiateLayerUpload InitiateLayerUploadXAmzTargetEnum = "SpencerFrontendService.InitiateLayerUpload"
)

type InitiateLayerUploadHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        InitiateLayerUploadXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type InitiateLayerUploadRequest struct {
	Headers InitiateLayerUploadHeaders
	Request shared.InitiateLayerUploadRequest `request:"mediaType=application/json"`
}

type InitiateLayerUploadResponse struct {
	ContentType                 string
	InitiateLayerUploadResponse *shared.InitiateLayerUploadResponse
	InvalidParameterException   *interface{}
	RegistryNotFoundException   *interface{}
	RepositoryNotFoundException *interface{}
	ServerException             *interface{}
	StatusCode                  int64
	UnsupportedCommandException *interface{}
}
