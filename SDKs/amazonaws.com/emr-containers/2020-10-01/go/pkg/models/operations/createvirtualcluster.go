package operations

import (
	"openapi/pkg/models/shared"
)

type CreateVirtualClusterHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateVirtualClusterRequestBodyContainerProvider struct {
	ID   *string                           `json:"id"`
	Info *shared.ContainerInfo             `json:"info"`
	Type *shared.ContainerProviderTypeEnum `json:"type"`
}

type CreateVirtualClusterRequestBody struct {
	ClientToken       string                                           `json:"clientToken"`
	ContainerProvider CreateVirtualClusterRequestBodyContainerProvider `json:"containerProvider"`
	Name              string                                           `json:"name"`
	Tags              map[string]string                                `json:"tags"`
}

type CreateVirtualClusterRequest struct {
	Headers CreateVirtualClusterHeaders
	Request CreateVirtualClusterRequestBody `request:"mediaType=application/json"`
}

type CreateVirtualClusterResponse struct {
	ContentType                  string
	CreateVirtualClusterResponse *shared.CreateVirtualClusterResponse
	InternalServerException      *interface{}
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
	ValidationException          *interface{}
}
