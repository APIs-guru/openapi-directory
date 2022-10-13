package operations

import (
	"openapi/pkg/models/shared"
)

type ListBootstrapActionsQueryParams struct {
	Marker *string `queryParam:"style=form,explode=true,name=Marker"`
}

type ListBootstrapActionsXAmzTargetEnum string

const (
	ListBootstrapActionsXAmzTargetEnumElasticMapReduceListBootstrapActions ListBootstrapActionsXAmzTargetEnum = "ElasticMapReduce.ListBootstrapActions"
)

type ListBootstrapActionsHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListBootstrapActionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListBootstrapActionsRequest struct {
	QueryParams ListBootstrapActionsQueryParams
	Headers     ListBootstrapActionsHeaders
	Request     shared.ListBootstrapActionsInput `request:"mediaType=application/json"`
}

type ListBootstrapActionsResponse struct {
	ContentType                string
	InternalServerException    *interface{}
	InvalidRequestException    *interface{}
	ListBootstrapActionsOutput *shared.ListBootstrapActionsOutput
	StatusCode                 int64
}
