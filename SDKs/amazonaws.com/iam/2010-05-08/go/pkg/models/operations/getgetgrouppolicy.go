package operations

type GetGetGroupPolicyActionEnum string

const (
	GetGetGroupPolicyActionEnumGetGroupPolicy GetGetGroupPolicyActionEnum = "GetGroupPolicy"
)

type GetGetGroupPolicyVersionEnum string

const (
	GetGetGroupPolicyVersionEnumTwoThousandAndTen0508 GetGetGroupPolicyVersionEnum = "2010-05-08"
)

type GetGetGroupPolicyQueryParams struct {
	Action     GetGetGroupPolicyActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	GroupName  string                       `queryParam:"style=form,explode=true,name=GroupName"`
	PolicyName string                       `queryParam:"style=form,explode=true,name=PolicyName"`
	Version    GetGetGroupPolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetGetGroupPolicyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetGetGroupPolicyRequest struct {
	QueryParams GetGetGroupPolicyQueryParams
	Headers     GetGetGroupPolicyHeaders
}

type GetGetGroupPolicyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
