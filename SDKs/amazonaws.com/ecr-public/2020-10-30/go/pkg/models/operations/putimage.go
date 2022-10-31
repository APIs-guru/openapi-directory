package operations

import (
	"openapi/pkg/models/shared"
)

type PutImageXAmzTargetEnum string

const (
	PutImageXAmzTargetEnumSpencerFrontendServicePutImage PutImageXAmzTargetEnum = "SpencerFrontendService.PutImage"
)

type PutImageHeaders struct {
	XAmzAlgorithm     *string                `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        PutImageXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type PutImageRequest struct {
	Headers PutImageHeaders
	Request shared.PutImageRequest `request:"mediaType=application/json"`
}

type PutImageResponse struct {
	ContentType                       string
	ImageAlreadyExistsException       *interface{}
	ImageDigestDoesNotMatchException  *interface{}
	ImageTagAlreadyExistsException    *interface{}
	InvalidParameterException         *interface{}
	LayersNotFoundException           *interface{}
	LimitExceededException            *interface{}
	PutImageResponse                  *shared.PutImageResponse
	ReferencedImagesNotFoundException *interface{}
	RegistryNotFoundException         *interface{}
	RepositoryNotFoundException       *interface{}
	ServerException                   *interface{}
	StatusCode                        int64
	UnsupportedCommandException       *interface{}
}
