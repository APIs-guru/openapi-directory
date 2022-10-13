package operations

import (
	"openapi/pkg/models/shared"
)

type ListRepositoriesQueryParams struct {
	NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListRepositoriesXAmzTargetEnum string

const (
	ListRepositoriesXAmzTargetEnumCodeCommit20150413ListRepositories ListRepositoriesXAmzTargetEnum = "CodeCommit_20150413.ListRepositories"
)

type ListRepositoriesHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListRepositoriesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListRepositoriesRequest struct {
	QueryParams ListRepositoriesQueryParams
	Headers     ListRepositoriesHeaders
	Request     shared.ListRepositoriesInput `request:"mediaType=application/json"`
}

type ListRepositoriesResponse struct {
	ContentType                       string
	InvalidContinuationTokenException *interface{}
	InvalidOrderException             *interface{}
	InvalidSortByException            *interface{}
	ListRepositoriesOutput            *shared.ListRepositoriesOutput
	StatusCode                        int64
}
