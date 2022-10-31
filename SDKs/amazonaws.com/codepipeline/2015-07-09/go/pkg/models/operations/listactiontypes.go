package operations

import (
	"openapi/pkg/models/shared"
)

type ListActionTypesQueryParams struct {
	NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListActionTypesXAmzTargetEnum string

const (
	ListActionTypesXAmzTargetEnumCodePipeline20150709ListActionTypes ListActionTypesXAmzTargetEnum = "CodePipeline_20150709.ListActionTypes"
)

type ListActionTypesHeaders struct {
	XAmzAlgorithm     *string                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListActionTypesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListActionTypesRequest struct {
	QueryParams ListActionTypesQueryParams
	Headers     ListActionTypesHeaders
	Request     shared.ListActionTypesInput `request:"mediaType=application/json"`
}

type ListActionTypesResponse struct {
	ContentType               string
	InvalidNextTokenException *interface{}
	ListActionTypesOutput     *shared.ListActionTypesOutput
	StatusCode                int64
	ValidationException       *interface{}
}
