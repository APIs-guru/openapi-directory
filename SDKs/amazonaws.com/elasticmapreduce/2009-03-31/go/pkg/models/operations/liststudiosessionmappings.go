package operations

import (
	"openapi/pkg/models/shared"
)

type ListStudioSessionMappingsQueryParams struct {
	Marker *string `queryParam:"style=form,explode=true,name=Marker"`
}

type ListStudioSessionMappingsXAmzTargetEnum string

const (
	ListStudioSessionMappingsXAmzTargetEnumElasticMapReduceListStudioSessionMappings ListStudioSessionMappingsXAmzTargetEnum = "ElasticMapReduce.ListStudioSessionMappings"
)

type ListStudioSessionMappingsHeaders struct {
	XAmzAlgorithm     *string                                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListStudioSessionMappingsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListStudioSessionMappingsRequest struct {
	QueryParams ListStudioSessionMappingsQueryParams
	Headers     ListStudioSessionMappingsHeaders
	Request     shared.ListStudioSessionMappingsInput `request:"mediaType=application/json"`
}

type ListStudioSessionMappingsResponse struct {
	ContentType                     string
	InternalServerError             *interface{}
	InvalidRequestException         *interface{}
	ListStudioSessionMappingsOutput *shared.ListStudioSessionMappingsOutput
	StatusCode                      int64
}
