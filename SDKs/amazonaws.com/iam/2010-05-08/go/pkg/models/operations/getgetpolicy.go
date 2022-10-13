package operations

type GetGetPolicyActionEnum string

const (
	GetGetPolicyActionEnumGetPolicy GetGetPolicyActionEnum = "GetPolicy"
)

type GetGetPolicyVersionEnum string

const (
	GetGetPolicyVersionEnumTwoThousandAndTen0508 GetGetPolicyVersionEnum = "2010-05-08"
)

type GetGetPolicyQueryParams struct {
	Action    GetGetPolicyActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	PolicyArn string                  `queryParam:"style=form,explode=true,name=PolicyArn"`
	Version   GetGetPolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetGetPolicyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetGetPolicyRequest struct {
	QueryParams GetGetPolicyQueryParams
	Headers     GetGetPolicyHeaders
}

type GetGetPolicyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
