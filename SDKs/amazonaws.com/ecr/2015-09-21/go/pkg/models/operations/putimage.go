package operations

import (
	"openapi/pkg/models/shared"
)

type PutImageXAmzTargetEnum string

const (
	PutImageXAmzTargetEnumAmazonEc2ContainerRegistryV20150921PutImage PutImageXAmzTargetEnum = "AmazonEC2ContainerRegistry_V20150921.PutImage"
)

type PutImageHeaders struct {
	XAmzAlgorithm     *string                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutImageXAmzTargetEnum `header:"name=X-Amz-Target"`
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
	KmsException                      *interface{}
	LayersNotFoundException           *interface{}
	LimitExceededException            *interface{}
	PutImageResponse                  *shared.PutImageResponse
	ReferencedImagesNotFoundException *interface{}
	RepositoryNotFoundException       *interface{}
	ServerException                   *interface{}
	StatusCode                        int64
}
