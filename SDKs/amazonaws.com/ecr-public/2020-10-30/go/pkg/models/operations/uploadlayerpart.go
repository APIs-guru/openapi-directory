package operations

import (
	"openapi/pkg/models/shared"
)

type UploadLayerPartXAmzTargetEnum string

const (
	UploadLayerPartXAmzTargetEnumSpencerFrontendServiceUploadLayerPart UploadLayerPartXAmzTargetEnum = "SpencerFrontendService.UploadLayerPart"
)

type UploadLayerPartHeaders struct {
	XAmzAlgorithm     *string                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UploadLayerPartXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UploadLayerPartRequest struct {
	Headers UploadLayerPartHeaders
	Request shared.UploadLayerPartRequest `request:"mediaType=application/json"`
}

type UploadLayerPartResponse struct {
	ContentType                 string
	InvalidLayerPartException   *interface{}
	InvalidParameterException   *interface{}
	LimitExceededException      *interface{}
	RegistryNotFoundException   *interface{}
	RepositoryNotFoundException *interface{}
	ServerException             *interface{}
	StatusCode                  int64
	UnsupportedCommandException *interface{}
	UploadLayerPartResponse     *shared.UploadLayerPartResponse
	UploadNotFoundException     *interface{}
}
