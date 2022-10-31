package operations

import (
	"openapi/pkg/models/shared"
)

type ListServicesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListServicesXAmzTargetEnum string

const (
	ListServicesXAmzTargetEnumAppRunnerListServices ListServicesXAmzTargetEnum = "AppRunner.ListServices"
)

type ListServicesHeaders struct {
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListServicesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListServicesRequest struct {
	QueryParams ListServicesQueryParams
	Headers     ListServicesHeaders
	Request     shared.ListServicesRequest `request:"mediaType=application/json"`
}

type ListServicesResponse struct {
	ContentType                   string
	InternalServiceErrorException *interface{}
	InvalidRequestException       *interface{}
	ListServicesResponse          *shared.ListServicesResponse
	StatusCode                    int64
}
