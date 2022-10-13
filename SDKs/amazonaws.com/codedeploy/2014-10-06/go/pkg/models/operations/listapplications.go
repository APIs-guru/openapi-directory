package operations

import (
	"openapi/pkg/models/shared"
)

type ListApplicationsQueryParams struct {
	NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListApplicationsXAmzTargetEnum string

const (
	ListApplicationsXAmzTargetEnumCodeDeploy20141006ListApplications ListApplicationsXAmzTargetEnum = "CodeDeploy_20141006.ListApplications"
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
	Request     shared.ListApplicationsInput `request:"mediaType=application/json"`
}

type ListApplicationsResponse struct {
	ContentType               string
	InvalidNextTokenException *interface{}
	ListApplicationsOutput    *shared.ListApplicationsOutput
	StatusCode                int64
}
