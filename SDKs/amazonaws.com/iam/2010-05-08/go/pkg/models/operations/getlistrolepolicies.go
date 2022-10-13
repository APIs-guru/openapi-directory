package operations

type GetListRolePoliciesActionEnum string

const (
	GetListRolePoliciesActionEnumListRolePolicies GetListRolePoliciesActionEnum = "ListRolePolicies"
)

type GetListRolePoliciesVersionEnum string

const (
	GetListRolePoliciesVersionEnumTwoThousandAndTen0508 GetListRolePoliciesVersionEnum = "2010-05-08"
)

type GetListRolePoliciesQueryParams struct {
	Action   GetListRolePoliciesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker   *string                        `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems *int64                         `queryParam:"style=form,explode=true,name=MaxItems"`
	RoleName string                         `queryParam:"style=form,explode=true,name=RoleName"`
	Version  GetListRolePoliciesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetListRolePoliciesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetListRolePoliciesRequest struct {
	QueryParams GetListRolePoliciesQueryParams
	Headers     GetListRolePoliciesHeaders
}

type GetListRolePoliciesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
