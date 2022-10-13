package operations

import (
	"openapi/pkg/models/shared"
)

type ListInstanceFleetsQueryParams struct {
	Marker *string `queryParam:"style=form,explode=true,name=Marker"`
}

type ListInstanceFleetsXAmzTargetEnum string

const (
	ListInstanceFleetsXAmzTargetEnumElasticMapReduceListInstanceFleets ListInstanceFleetsXAmzTargetEnum = "ElasticMapReduce.ListInstanceFleets"
)

type ListInstanceFleetsHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListInstanceFleetsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListInstanceFleetsRequest struct {
	QueryParams ListInstanceFleetsQueryParams
	Headers     ListInstanceFleetsHeaders
	Request     shared.ListInstanceFleetsInput `request:"mediaType=application/json"`
}

type ListInstanceFleetsResponse struct {
	ContentType              string
	InternalServerException  *interface{}
	InvalidRequestException  *interface{}
	ListInstanceFleetsOutput *shared.ListInstanceFleetsOutput
	StatusCode               int64
}
