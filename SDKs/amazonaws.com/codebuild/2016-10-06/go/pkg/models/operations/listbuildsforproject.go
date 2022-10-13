package operations

import (
	"openapi/pkg/models/shared"
)

type ListBuildsForProjectQueryParams struct {
	NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListBuildsForProjectXAmzTargetEnum string

const (
	ListBuildsForProjectXAmzTargetEnumCodeBuild20161006ListBuildsForProject ListBuildsForProjectXAmzTargetEnum = "CodeBuild_20161006.ListBuildsForProject"
)

type ListBuildsForProjectHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListBuildsForProjectXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListBuildsForProjectRequest struct {
	QueryParams ListBuildsForProjectQueryParams
	Headers     ListBuildsForProjectHeaders
	Request     shared.ListBuildsForProjectInput `request:"mediaType=application/json"`
}

type ListBuildsForProjectResponse struct {
	ContentType                string
	InvalidInputException      *interface{}
	ListBuildsForProjectOutput *shared.ListBuildsForProjectOutput
	ResourceNotFoundException  *interface{}
	StatusCode                 int64
}
