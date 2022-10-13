package operations

type GetAttachGroupPolicyActionEnum string

const (
	GetAttachGroupPolicyActionEnumAttachGroupPolicy GetAttachGroupPolicyActionEnum = "AttachGroupPolicy"
)

type GetAttachGroupPolicyVersionEnum string

const (
	GetAttachGroupPolicyVersionEnumTwoThousandAndTen0508 GetAttachGroupPolicyVersionEnum = "2010-05-08"
)

type GetAttachGroupPolicyQueryParams struct {
	Action    GetAttachGroupPolicyActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	GroupName string                          `queryParam:"style=form,explode=true,name=GroupName"`
	PolicyArn string                          `queryParam:"style=form,explode=true,name=PolicyArn"`
	Version   GetAttachGroupPolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetAttachGroupPolicyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetAttachGroupPolicyRequest struct {
	QueryParams GetAttachGroupPolicyQueryParams
	Headers     GetAttachGroupPolicyHeaders
}

type GetAttachGroupPolicyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
