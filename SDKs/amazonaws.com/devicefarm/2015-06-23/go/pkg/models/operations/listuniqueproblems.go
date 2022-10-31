package operations

import (
	"openapi/pkg/models/shared"
)

type ListUniqueProblemsQueryParams struct {
	NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListUniqueProblemsXAmzTargetEnum string

const (
	ListUniqueProblemsXAmzTargetEnumDeviceFarm20150623ListUniqueProblems ListUniqueProblemsXAmzTargetEnum = "DeviceFarm_20150623.ListUniqueProblems"
)

type ListUniqueProblemsHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListUniqueProblemsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListUniqueProblemsRequest struct {
	QueryParams ListUniqueProblemsQueryParams
	Headers     ListUniqueProblemsHeaders
	Request     shared.ListUniqueProblemsRequest `request:"mediaType=application/json"`
}

type ListUniqueProblemsResponse struct {
	ArgumentException        *interface{}
	ContentType              string
	LimitExceededException   *interface{}
	ListUniqueProblemsResult *shared.ListUniqueProblemsResult
	NotFoundException        *interface{}
	ServiceAccountException  *interface{}
	StatusCode               int64
}
