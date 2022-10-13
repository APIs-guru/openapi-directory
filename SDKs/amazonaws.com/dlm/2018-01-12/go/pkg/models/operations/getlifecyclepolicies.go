package operations

import (
	"openapi/pkg/models/shared"
)

type GetLifecyclePoliciesStateEnum string

const (
	GetLifecyclePoliciesStateEnumEnabled  GetLifecyclePoliciesStateEnum = "ENABLED"
	GetLifecyclePoliciesStateEnumDisabled GetLifecyclePoliciesStateEnum = "DISABLED"
	GetLifecyclePoliciesStateEnumError    GetLifecyclePoliciesStateEnum = "ERROR"
)

type GetLifecyclePoliciesQueryParams struct {
	PolicyIds     []string                        `queryParam:"style=form,explode=true,name=policyIds"`
	ResourceTypes []shared.ResourceTypeValuesEnum `queryParam:"style=form,explode=true,name=resourceTypes"`
	State         *GetLifecyclePoliciesStateEnum  `queryParam:"style=form,explode=true,name=state"`
	TagsToAdd     []string                        `queryParam:"style=form,explode=true,name=tagsToAdd"`
	TargetTags    []string                        `queryParam:"style=form,explode=true,name=targetTags"`
}

type GetLifecyclePoliciesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetLifecyclePoliciesRequest struct {
	QueryParams GetLifecyclePoliciesQueryParams
	Headers     GetLifecyclePoliciesHeaders
}

type GetLifecyclePoliciesResponse struct {
	ContentType                  string
	GetLifecyclePoliciesResponse *shared.GetLifecyclePoliciesResponse
	InternalServerException      *interface{}
	InvalidRequestException      *interface{}
	LimitExceededException       *interface{}
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
}
