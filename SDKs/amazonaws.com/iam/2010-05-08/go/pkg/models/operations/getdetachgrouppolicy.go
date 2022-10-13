package operations

type GetDetachGroupPolicyActionEnum string

const (
	GetDetachGroupPolicyActionEnumDetachGroupPolicy GetDetachGroupPolicyActionEnum = "DetachGroupPolicy"
)

type GetDetachGroupPolicyVersionEnum string

const (
	GetDetachGroupPolicyVersionEnumTwoThousandAndTen0508 GetDetachGroupPolicyVersionEnum = "2010-05-08"
)

type GetDetachGroupPolicyQueryParams struct {
	Action    GetDetachGroupPolicyActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	GroupName string                          `queryParam:"style=form,explode=true,name=GroupName"`
	PolicyArn string                          `queryParam:"style=form,explode=true,name=PolicyArn"`
	Version   GetDetachGroupPolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDetachGroupPolicyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDetachGroupPolicyRequest struct {
	QueryParams GetDetachGroupPolicyQueryParams
	Headers     GetDetachGroupPolicyHeaders
}

type GetDetachGroupPolicyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
