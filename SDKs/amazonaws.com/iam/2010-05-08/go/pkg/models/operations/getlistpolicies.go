package operations

type GetListPoliciesActionEnum string

const (
	GetListPoliciesActionEnumListPolicies GetListPoliciesActionEnum = "ListPolicies"
)

type GetListPoliciesPolicyUsageFilterEnum string

const (
	GetListPoliciesPolicyUsageFilterEnumPermissionsPolicy   GetListPoliciesPolicyUsageFilterEnum = "PermissionsPolicy"
	GetListPoliciesPolicyUsageFilterEnumPermissionsBoundary GetListPoliciesPolicyUsageFilterEnum = "PermissionsBoundary"
)

type GetListPoliciesScopeEnum string

const (
	GetListPoliciesScopeEnumAll   GetListPoliciesScopeEnum = "All"
	GetListPoliciesScopeEnumAws   GetListPoliciesScopeEnum = "AWS"
	GetListPoliciesScopeEnumLocal GetListPoliciesScopeEnum = "Local"
)

type GetListPoliciesVersionEnum string

const (
	GetListPoliciesVersionEnumTwoThousandAndTen0508 GetListPoliciesVersionEnum = "2010-05-08"
)

type GetListPoliciesQueryParams struct {
	Action            GetListPoliciesActionEnum             `queryParam:"style=form,explode=true,name=Action"`
	Marker            *string                               `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems          *int64                                `queryParam:"style=form,explode=true,name=MaxItems"`
	OnlyAttached      *bool                                 `queryParam:"style=form,explode=true,name=OnlyAttached"`
	PathPrefix        *string                               `queryParam:"style=form,explode=true,name=PathPrefix"`
	PolicyUsageFilter *GetListPoliciesPolicyUsageFilterEnum `queryParam:"style=form,explode=true,name=PolicyUsageFilter"`
	Scope             *GetListPoliciesScopeEnum             `queryParam:"style=form,explode=true,name=Scope"`
	Version           GetListPoliciesVersionEnum            `queryParam:"style=form,explode=true,name=Version"`
}

type GetListPoliciesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetListPoliciesRequest struct {
	QueryParams GetListPoliciesQueryParams
	Headers     GetListPoliciesHeaders
}

type GetListPoliciesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
