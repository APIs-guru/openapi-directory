package operations

import (
	"openapi/pkg/models/shared"
)

type ListClustersQueryParams struct {
	Marker *string `queryParam:"style=form,explode=true,name=Marker"`
}

type ListClustersXAmzTargetEnum string

const (
	ListClustersXAmzTargetEnumElasticMapReduceListClusters ListClustersXAmzTargetEnum = "ElasticMapReduce.ListClusters"
)

type ListClustersHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListClustersXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListClustersRequest struct {
	QueryParams ListClustersQueryParams
	Headers     ListClustersHeaders
	Request     shared.ListClustersInput `request:"mediaType=application/json"`
}

type ListClustersResponse struct {
	ContentType             string
	InternalServerException *interface{}
	InvalidRequestException *interface{}
	ListClustersOutput      *shared.ListClustersOutput
	StatusCode              int64
}
