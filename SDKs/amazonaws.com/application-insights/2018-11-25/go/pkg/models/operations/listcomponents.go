package operations

import (
	"openapi/pkg/models/shared"
)

type ListComponentsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListComponentsXAmzTargetEnum string

const (
	ListComponentsXAmzTargetEnumEc2WindowsBarleyServiceListComponents ListComponentsXAmzTargetEnum = "EC2WindowsBarleyService.ListComponents"
)

type ListComponentsHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListComponentsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListComponentsRequest struct {
	QueryParams ListComponentsQueryParams
	Headers     ListComponentsHeaders
	Request     shared.ListComponentsRequest `request:"mediaType=application/json"`
}

type ListComponentsResponse struct {
	ContentType               string
	InternalServerException   *interface{}
	ListComponentsResponse    *shared.ListComponentsResponse
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
