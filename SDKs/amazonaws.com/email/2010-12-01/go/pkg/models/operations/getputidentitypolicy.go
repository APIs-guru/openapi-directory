package operations

type GetPutIdentityPolicyActionEnum string

const (
	GetPutIdentityPolicyActionEnumPutIdentityPolicy GetPutIdentityPolicyActionEnum = "PutIdentityPolicy"
)

type GetPutIdentityPolicyVersionEnum string

const (
	GetPutIdentityPolicyVersionEnumTwoThousandAndTen1201 GetPutIdentityPolicyVersionEnum = "2010-12-01"
)

type GetPutIdentityPolicyQueryParams struct {
	Action     GetPutIdentityPolicyActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Identity   string                          `queryParam:"style=form,explode=true,name=Identity"`
	Policy     string                          `queryParam:"style=form,explode=true,name=Policy"`
	PolicyName string                          `queryParam:"style=form,explode=true,name=PolicyName"`
	Version    GetPutIdentityPolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetPutIdentityPolicyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetPutIdentityPolicyRequest struct {
	QueryParams GetPutIdentityPolicyQueryParams
	Headers     GetPutIdentityPolicyHeaders
}

type GetPutIdentityPolicyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
