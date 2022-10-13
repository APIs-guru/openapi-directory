package operations

import (
	"openapi/pkg/models/shared"
)

type GetDownloadURLForLayerXAmzTargetEnum string

const (
	GetDownloadURLForLayerXAmzTargetEnumAmazonEc2ContainerRegistryV20150921GetDownloadURLForLayer GetDownloadURLForLayerXAmzTargetEnum = "AmazonEC2ContainerRegistry_V20150921.GetDownloadUrlForLayer"
)

type GetDownloadURLForLayerHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetDownloadURLForLayerXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetDownloadURLForLayerRequest struct {
	Headers GetDownloadURLForLayerHeaders
	Request shared.GetDownloadURLForLayerRequest `request:"mediaType=application/json"`
}

type GetDownloadURLForLayerResponse struct {
	ContentType                    string
	GetDownloadURLForLayerResponse *shared.GetDownloadURLForLayerResponse
	InvalidParameterException      *interface{}
	LayerInaccessibleException     *interface{}
	LayersNotFoundException        *interface{}
	RepositoryNotFoundException    *interface{}
	ServerException                *interface{}
	StatusCode                     int64
}
