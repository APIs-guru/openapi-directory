package operations

import (
	"openapi/pkg/models/shared"
)

type ListProblemsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListProblemsXAmzTargetEnum string

const (
	ListProblemsXAmzTargetEnumEc2WindowsBarleyServiceListProblems ListProblemsXAmzTargetEnum = "EC2WindowsBarleyService.ListProblems"
)

type ListProblemsHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListProblemsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListProblemsRequest struct {
	QueryParams ListProblemsQueryParams
	Headers     ListProblemsHeaders
	Request     shared.ListProblemsRequest `request:"mediaType=application/json"`
}

type ListProblemsResponse struct {
	ContentType               string
	InternalServerException   *interface{}
	ListProblemsResponse      *shared.ListProblemsResponse
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
