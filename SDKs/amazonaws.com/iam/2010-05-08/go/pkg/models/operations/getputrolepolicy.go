package operations

type GetPutRolePolicyActionEnum string

const (
	GetPutRolePolicyActionEnumPutRolePolicy GetPutRolePolicyActionEnum = "PutRolePolicy"
)

type GetPutRolePolicyVersionEnum string

const (
	GetPutRolePolicyVersionEnumTwoThousandAndTen0508 GetPutRolePolicyVersionEnum = "2010-05-08"
)

type GetPutRolePolicyQueryParams struct {
	Action         GetPutRolePolicyActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	PolicyDocument string                      `queryParam:"style=form,explode=true,name=PolicyDocument"`
	PolicyName     string                      `queryParam:"style=form,explode=true,name=PolicyName"`
	RoleName       string                      `queryParam:"style=form,explode=true,name=RoleName"`
	Version        GetPutRolePolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetPutRolePolicyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetPutRolePolicyRequest struct {
	QueryParams GetPutRolePolicyQueryParams
	Headers     GetPutRolePolicyHeaders
}

type GetPutRolePolicyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
