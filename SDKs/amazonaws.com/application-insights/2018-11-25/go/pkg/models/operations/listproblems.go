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
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListProblemsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
