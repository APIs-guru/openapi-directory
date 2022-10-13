package operations

import (
	"openapi/pkg/models/shared"
)

type ListBuildBatchesForProjectQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListBuildBatchesForProjectXAmzTargetEnum string

const (
	ListBuildBatchesForProjectXAmzTargetEnumCodeBuild20161006ListBuildBatchesForProject ListBuildBatchesForProjectXAmzTargetEnum = "CodeBuild_20161006.ListBuildBatchesForProject"
)

type ListBuildBatchesForProjectHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListBuildBatchesForProjectXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListBuildBatchesForProjectRequest struct {
	QueryParams ListBuildBatchesForProjectQueryParams
	Headers     ListBuildBatchesForProjectHeaders
	Request     shared.ListBuildBatchesForProjectInput `request:"mediaType=application/json"`
}

type ListBuildBatchesForProjectResponse struct {
	ContentType                      string
	InvalidInputException            *interface{}
	ListBuildBatchesForProjectOutput *shared.ListBuildBatchesForProjectOutput
	ResourceNotFoundException        *interface{}
	StatusCode                       int64
}
