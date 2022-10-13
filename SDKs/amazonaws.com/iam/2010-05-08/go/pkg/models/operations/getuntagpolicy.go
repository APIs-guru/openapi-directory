package operations

type GetUntagPolicyActionEnum string

const (
	GetUntagPolicyActionEnumUntagPolicy GetUntagPolicyActionEnum = "UntagPolicy"
)

type GetUntagPolicyVersionEnum string

const (
	GetUntagPolicyVersionEnumTwoThousandAndTen0508 GetUntagPolicyVersionEnum = "2010-05-08"
)

type GetUntagPolicyQueryParams struct {
	Action    GetUntagPolicyActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	PolicyArn string                    `queryParam:"style=form,explode=true,name=PolicyArn"`
	TagKeys   []string                  `queryParam:"style=form,explode=true,name=TagKeys"`
	Version   GetUntagPolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetUntagPolicyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetUntagPolicyRequest struct {
	QueryParams GetUntagPolicyQueryParams
	Headers     GetUntagPolicyHeaders
}

type GetUntagPolicyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
