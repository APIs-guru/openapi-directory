package operations

import (
	"openapi/pkg/models/shared"
)

type ListApplicationsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListApplicationsXAmzTargetEnum string

const (
	ListApplicationsXAmzTargetEnumEc2WindowsBarleyServiceListApplications ListApplicationsXAmzTargetEnum = "EC2WindowsBarleyService.ListApplications"
)

type ListApplicationsHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListApplicationsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListApplicationsRequest struct {
	QueryParams ListApplicationsQueryParams
	Headers     ListApplicationsHeaders
	Request     shared.ListApplicationsRequest `request:"mediaType=application/json"`
}

type ListApplicationsResponse struct {
	ContentType              string
	InternalServerException  *interface{}
	ListApplicationsResponse *shared.ListApplicationsResponse
	StatusCode               int64
	ValidationException      *interface{}
}
