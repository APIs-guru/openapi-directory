package operations

import (
	"openapi/pkg/models/shared"
)

type ListLogPatternSetsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListLogPatternSetsXAmzTargetEnum string

const (
	ListLogPatternSetsXAmzTargetEnumEc2WindowsBarleyServiceListLogPatternSets ListLogPatternSetsXAmzTargetEnum = "EC2WindowsBarleyService.ListLogPatternSets"
)

type ListLogPatternSetsHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListLogPatternSetsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListLogPatternSetsRequest struct {
	QueryParams ListLogPatternSetsQueryParams
	Headers     ListLogPatternSetsHeaders
	Request     shared.ListLogPatternSetsRequest `request:"mediaType=application/json"`
}

type ListLogPatternSetsResponse struct {
	ContentType                string
	InternalServerException    *interface{}
	ListLogPatternSetsResponse *shared.ListLogPatternSetsResponse
	ResourceNotFoundException  *interface{}
	StatusCode                 int64
	ValidationException        *interface{}
}
