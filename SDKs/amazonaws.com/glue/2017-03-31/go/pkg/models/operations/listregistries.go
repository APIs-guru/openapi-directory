package operations

import (
	"openapi/pkg/models/shared"
)

type ListRegistriesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListRegistriesXAmzTargetEnum string

const (
	ListRegistriesXAmzTargetEnumAwsGlueListRegistries ListRegistriesXAmzTargetEnum = "AWSGlue.ListRegistries"
)

type ListRegistriesHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListRegistriesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListRegistriesRequest struct {
	QueryParams ListRegistriesQueryParams
	Headers     ListRegistriesHeaders
	Request     shared.ListRegistriesInput `request:"mediaType=application/json"`
}

type ListRegistriesResponse struct {
	AccessDeniedException    *interface{}
	ContentType              string
	InternalServiceException *interface{}
	InvalidInputException    *interface{}
	ListRegistriesResponse   *shared.ListRegistriesResponse
	StatusCode               int64
}
