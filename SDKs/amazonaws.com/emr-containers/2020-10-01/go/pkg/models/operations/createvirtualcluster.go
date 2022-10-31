package operations

import (
	"openapi/pkg/models/shared"
)

type CreateVirtualClusterHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateVirtualClusterRequestBodyContainerProvider struct {
	ID   *string                           `json:"id,omitempty"`
	Info *shared.ContainerInfo             `json:"info,omitempty"`
	Type *shared.ContainerProviderTypeEnum `json:"type,omitempty"`
}

type CreateVirtualClusterRequestBody struct {
	ClientToken       string                                           `json:"clientToken"`
	ContainerProvider CreateVirtualClusterRequestBodyContainerProvider `json:"containerProvider"`
	Name              string                                           `json:"name"`
	Tags              map[string]string                                `json:"tags,omitempty"`
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
