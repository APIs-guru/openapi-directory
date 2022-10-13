package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ListVirtualClustersContainerProviderTypeEnum string

const (
	ListVirtualClustersContainerProviderTypeEnumEks ListVirtualClustersContainerProviderTypeEnum = "EKS"
)

type ListVirtualClustersQueryParams struct {
	ContainerProviderID   *string                                       `queryParam:"style=form,explode=true,name=containerProviderId"`
	ContainerProviderType *ListVirtualClustersContainerProviderTypeEnum `queryParam:"style=form,explode=true,name=containerProviderType"`
	CreatedAfter          *time.Time                                    `queryParam:"style=form,explode=true,name=createdAfter"`
	CreatedBefore         *time.Time                                    `queryParam:"style=form,explode=true,name=createdBefore"`
	MaxResults            *int64                                        `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken             *string                                       `queryParam:"style=form,explode=true,name=nextToken"`
	States                []shared.VirtualClusterStateEnum              `queryParam:"style=form,explode=true,name=states"`
}

type ListVirtualClustersHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListVirtualClustersRequest struct {
	QueryParams ListVirtualClustersQueryParams
	Headers     ListVirtualClustersHeaders
}

type ListVirtualClustersResponse struct {
	ContentType                 string
	InternalServerException     *interface{}
	ListVirtualClustersResponse *shared.ListVirtualClustersResponse
	StatusCode                  int64
	ValidationException         *interface{}
}
