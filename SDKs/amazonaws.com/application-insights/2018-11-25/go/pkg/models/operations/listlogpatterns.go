package operations

import (
	"openapi/pkg/models/shared"
)

type ListLogPatternsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListLogPatternsXAmzTargetEnum string

const (
	ListLogPatternsXAmzTargetEnumEc2WindowsBarleyServiceListLogPatterns ListLogPatternsXAmzTargetEnum = "EC2WindowsBarleyService.ListLogPatterns"
)

type ListLogPatternsHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListLogPatternsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListLogPatternsRequest struct {
	QueryParams ListLogPatternsQueryParams
	Headers     ListLogPatternsHeaders
	Request     shared.ListLogPatternsRequest `request:"mediaType=application/json"`
}

type ListLogPatternsResponse struct {
	ContentType               string
	InternalServerException   *interface{}
	ListLogPatternsResponse   *shared.ListLogPatternsResponse
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
