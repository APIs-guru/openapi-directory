package operations

import (
	"openapi/pkg/models/shared"
)

type ListStepsQueryParams struct {
	Marker *string `queryParam:"style=form,explode=true,name=Marker"`
}

type ListStepsXAmzTargetEnum string

const (
	ListStepsXAmzTargetEnumElasticMapReduceListSteps ListStepsXAmzTargetEnum = "ElasticMapReduce.ListSteps"
)

type ListStepsHeaders struct {
	XAmzAlgorithm     *string                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListStepsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListStepsRequest struct {
	QueryParams ListStepsQueryParams
	Headers     ListStepsHeaders
	Request     shared.ListStepsInput `request:"mediaType=application/json"`
}

type ListStepsResponse struct {
	ContentType             string
	InternalServerException *interface{}
	InvalidRequestException *interface{}
	ListStepsOutput         *shared.ListStepsOutput
	StatusCode              int64
}
