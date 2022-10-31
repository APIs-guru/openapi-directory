package operations

import (
	"openapi/pkg/models/shared"
)

type ListPoliciesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListPoliciesXAmzTargetEnum string

const (
	ListPoliciesXAmzTargetEnumAwsfms20180101ListPolicies ListPoliciesXAmzTargetEnum = "AWSFMS_20180101.ListPolicies"
)

type ListPoliciesHeaders struct {
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListPoliciesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListPoliciesRequest struct {
	QueryParams ListPoliciesQueryParams
	Headers     ListPoliciesHeaders
	Request     shared.ListPoliciesRequest `request:"mediaType=application/json"`
}

type ListPoliciesResponse struct {
	ContentType               string
	InternalErrorException    *interface{}
	InvalidOperationException *interface{}
	LimitExceededException    *interface{}
	ListPoliciesResponse      *shared.ListPoliciesResponse
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
