package operations

type GetDeleteGroupPolicyActionEnum string

const (
	GetDeleteGroupPolicyActionEnumDeleteGroupPolicy GetDeleteGroupPolicyActionEnum = "DeleteGroupPolicy"
)

type GetDeleteGroupPolicyVersionEnum string

const (
	GetDeleteGroupPolicyVersionEnumTwoThousandAndTen0508 GetDeleteGroupPolicyVersionEnum = "2010-05-08"
)

type GetDeleteGroupPolicyQueryParams struct {
	Action     GetDeleteGroupPolicyActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	GroupName  string                          `queryParam:"style=form,explode=true,name=GroupName"`
	PolicyName string                          `queryParam:"style=form,explode=true,name=PolicyName"`
	Version    GetDeleteGroupPolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteGroupPolicyHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDeleteGroupPolicyRequest struct {
	QueryParams GetDeleteGroupPolicyQueryParams
	Headers     GetDeleteGroupPolicyHeaders
}

type GetDeleteGroupPolicyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
